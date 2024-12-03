package com.wisevision.dashboard.serviceImp;

import com.wisevision.dashboard.Repository.SalesTicketsRepository;
import com.wisevision.dashboard.entity.salesTickets;
import com.wisevision.dashboard.service.SalesTicketsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;
import java.util.stream.Collectors;
@Service
public class SalesTicketsServiceImpl implements SalesTicketsService {

    @Autowired
    private SalesTicketsRepository salesTicketsRepository;

    @Override
    public Map<String, Object> calculatePercentages(List<String> selectedItems) {
        if (selectedItems.size() < 2 || selectedItems.size() > 10) {
            throw new IllegalArgumentException("Number of selected items must be between 2 and 10.");
        }
        List<salesTickets> salesTicketsList = salesTicketsRepository.findAll();
        // Create a dictionary to associate each LIB with FK_ARTICLE
        Map<String, List<String>> libToFkArticle = new HashMap<>();
        for (salesTickets ticket : salesTicketsList) {
            List<String> libs = ticket.getLibList();
            List<String> fkArticles = ticket.getFkArticle();
            if (libs != null && fkArticles != null && libs.size() == fkArticles.size()) {
                for (int i = 0; i < libs.size(); i++) {
                    libToFkArticle.computeIfAbsent(libs.get(i), k -> new ArrayList<>()).add(fkArticles.get(i));
                }
            }
        }
        Map<String, Object> percentages = new HashMap<>();
        for (int i = 0; i < selectedItems.size(); i++) {
            for (int j = i + 1; j < selectedItems.size(); j++) {
                String item1 = selectedItems.get(i);
                String item2 = selectedItems.get(j);
                int totalTickets = 0;
                Map<String, Integer> hasItemCountsA = new HashMap<>();
                Map<String, Integer> hasItemCounts = new HashMap<>();
                for (String item : selectedItems) {
                    hasItemCounts.put(item, 0);
                    hasItemCountsA.put(item, 0);
                }
                for (salesTickets ticket : salesTicketsList) {
                    List<String> ticketItemsList = ticket.getFkArticle();
                    if (ticketItemsList != null) {
                        for (String item : selectedItems) {
                            String fkArticle = libToFkArticle.getOrDefault(item, Collections.emptyList()).stream().findFirst().orElse("");
                            if (ticketItemsList.contains(fkArticle)) {
                                hasItemCounts.put(item, hasItemCounts.get(item) + 1);
                            }
                        }
                        String fkArticle1 = libToFkArticle.getOrDefault(item1, Collections.emptyList()).stream().findFirst().orElse("");
                        String fkArticle2 = libToFkArticle.getOrDefault(item2, Collections.emptyList()).stream().findFirst().orElse("");
                        if (ticketItemsList.contains(fkArticle1) && ticketItemsList.contains(fkArticle2)) {
                            hasItemCountsA.put(item1, hasItemCountsA.get(item1) + 1);
                        }
                        totalTickets++;
                    }
                }
                if (item1 != item2) {
                    double percentageBFromA = (double) hasItemCountsA.get(item1) / hasItemCounts.get(item1) * 100;
                    double percentageAFromB = (double) hasItemCountsA.get(item1) / hasItemCounts.get(item2) * 100;
                    String key = item1 + " / " + item2;
                    Map<String, Double> values = new HashMap<>();
                    values.put("percentage_b_from_a", percentageBFromA);
                    values.put("percentage_a_from_b", percentageAFromB);
                    percentages.put(key, values);
                }
            }
        }
        return percentages;
    }

    @Override
    public List<String> getUniqueLibs() {
        Set<String> uniqueLibs = new HashSet<>();
        salesTicketsRepository.findAll().forEach(salesTicket -> uniqueLibs.addAll(salesTicket.getLibList()));
        return uniqueLibs.stream().distinct().collect(Collectors.toList());
    }

}
