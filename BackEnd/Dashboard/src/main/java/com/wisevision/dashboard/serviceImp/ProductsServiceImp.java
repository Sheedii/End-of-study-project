package com.wisevision.dashboard.serviceImp;


import com.wisevision.dashboard.Repository.ProductsRepository;
import com.wisevision.dashboard.entity.Products;
import com.wisevision.dashboard.service.ProductsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.sql.Date;
import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Service
public class ProductsServiceImp implements ProductsService {

    private final ProductsRepository productsRepository;

    @Autowired
    public ProductsServiceImp(ProductsRepository productsRepository) {
        this.productsRepository = productsRepository;
    }

    @Override
    public Double getTotalRevenueByLibAndFkJourBetween(String lib, Date firstDate, Date lastDate) {
        List<Products> products = productsRepository.findByLibAndFkJourBetween(lib, firstDate, lastDate);
        return products.stream()
                .mapToDouble(Products::getRevenue)
                .sum();
    }


    @Override
    public Double getTotalQuantityByLibAndFkJourBetween(String lib, Date firstDate, Date lastDate) {
        List<Products> products = productsRepository.findByLibAndFkJourBetween(lib, firstDate, lastDate);
        return products.stream()
                .mapToDouble(Products::getQT)
                .sum();
    }


    @Override
    public List<Products> getProductsByLibAndFkJourBetween(String lib, Date firstDate, Date lastDate) {
        return productsRepository.findByLibAndFkJourBetween(lib, firstDate, lastDate);
    }

    @Override
    public List<String> findAllUniqueLIB() {
        List<Products> products = productsRepository.findAll();
        return products.stream()
                .map(Products::getLIB)
                .distinct()
                .collect(Collectors.toList());
    }

    @Override
    public List<String> getProductsStartWith(String name) {
        List<Products> products = productsRepository.findByLIBStartingWith(name);
        // Extract the LIB attribute from each product
        return products.stream()
                .map(Products::getLIB)
                .distinct()
                .limit(10)
                .collect(Collectors.toList());
    }














    @Override
    public List<Double> getQuantityByLibAndFkJourBetween(String lib, Date firstDate, Date lastDate) {
        List<Products> products = productsRepository.findByLibAndFkJourBetween(lib, firstDate, lastDate);

        // Create a map of dates to quantities
        Map<java.util.Date, Double> quantityMap = products.stream()
                .collect(Collectors.toMap(Products::getFK_JOUR, Products::getQT));


        // Generate the list of all dates between firstDate and lastDate as java.util.Date
        List<java.util.Date> dateRange = getDateRange(firstDate, lastDate);


        // Create the result list, using the map to get quantities or defaulting to 0.0
        List<Double> quantities = dateRange.stream()
                .map(date -> quantityMap.getOrDefault(date, 0.0))
                .collect(Collectors.toList());

        return quantities;
    }

    private List<java.util.Date> getDateRange(Date startDate, Date endDate) {
        Calendar calendar = new GregorianCalendar();
        calendar.setTime(startDate);
        calendar.add(Calendar.DATE, 1);

        List<java.util.Date> dates = new ArrayList<>();
        while (!calendar.getTime().after(endDate)) {
            // Set the time component to 01:00:00
            calendar.set(Calendar.HOUR_OF_DAY, 1);
            calendar.set(Calendar.MINUTE, 0);
            calendar.set(Calendar.SECOND, 0);
            calendar.set(Calendar.MILLISECOND, 0);

            // Create a new date object with the modified time component
            Date date = new Date(calendar.getTimeInMillis());
            dates.add(date);

            // Move to the next day
            calendar.add(Calendar.DATE, 1);
        }
        return dates;
    }

    @Override
    public Map<String, List<Double>> getTopProductsRanking(int days) {
        // Set the date range for the last 30 days
        Calendar calendar = Calendar.getInstance();
        Date endDate = new Date(calendar.getTimeInMillis());
        calendar.add(Calendar.DAY_OF_YEAR, -1);
        Date startDate2 = new Date(calendar.getTimeInMillis());
        List<Products> products0 = productsRepository.findProductsSoldBetweenDates(startDate2, endDate);
        Collections.sort(products0, Comparator.comparingDouble(Products::getQT).reversed());
        int topProductsCount = 10;
        List<Products> topProductsYesterday = products0.subList(0, Math.min(topProductsCount, products0.size()));
        calendar.add(Calendar.DAY_OF_YEAR, -29); // Go back 29 more days for a total of 30 days
        Date startDate = new Date(calendar.getTimeInMillis());
        Map<String, List<Double>> productRankings = new LinkedHashMap<>();
        for (Products product : topProductsYesterday) {
            productRankings.put(product.getLIB(), getQuantityByLibAndFkJourBetween(product.getLIB(), startDate, endDate));
        }
        for(int i=0; i<30; i++) {
            List<Double> ranks = new ArrayList<>();
            int k=1;
            for (Map.Entry<String, List<Double>> entry1 : productRankings.entrySet()) {
                String productName1 = entry1.getKey();
                List<Double> quantities1 = entry1.getValue();
                Double quantity1 = quantities1.get(i);
                Double rank = 1.0;
                for (Map.Entry<String, List<Double>> entry2 : productRankings.entrySet()) {
                    if (!entry1.equals(entry2)) {
                        List<Double> quantities2 = entry2.getValue();
                        Double quantity2 = quantities2.get(i);
                        if (quantity1 < quantity2) {
                            rank++;
                        }
                    }
                }
                if (ranks.contains(rank)) {
                    rank+=k;
                    k++;                }
                ranks.add(rank);
            }
            int j =0;
                for (Map.Entry<String, List<Double>> entry1 : productRankings.entrySet()) {
                    List<Double> quantities1 = entry1.getValue();
                    quantities1.set(i, ranks.get(j));
                    j++;
                }
        }
        return productRankings;
    }



}
