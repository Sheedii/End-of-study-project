package com.wisevision.dashboard.service;


import com.wisevision.dashboard.entity.Products;

import java.sql.Date;
import java.util.List;
import java.util.Map;

public interface ProductsService {

    Double getTotalRevenueByLibAndFkJourBetween(String lib, Date firstDate, Date lastDate);

    Double getTotalQuantityByLibAndFkJourBetween(String lib, Date firstDate, Date lastDate);

    List<Products> getProductsByLibAndFkJourBetween(String lib, Date firstDate, Date lastDate);

    List<String> getProductsStartWith(String name);

    List<String> findAllUniqueLIB();




    List<Double> getQuantityByLibAndFkJourBetween(String lib, java.sql.Date firstDate, java.sql.Date lastDate);

    Map<String, List<Double>> getTopProductsRanking(int days);

}
