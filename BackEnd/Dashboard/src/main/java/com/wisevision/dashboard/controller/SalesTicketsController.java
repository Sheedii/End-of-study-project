package com.wisevision.dashboard.controller;

import com.wisevision.dashboard.service.SalesTicketsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/correlation")
@CrossOrigin(origins = "http://localhost:3000")
public class SalesTicketsController {

    @Autowired
    private SalesTicketsService salesTicketsService;

    @PostMapping("/calculate-percentages")
    public Map<String, Object> calculatePercentages(@RequestBody Map<String, List<String>> request) {
        List<String> selectedItems = request.get("selected_items");
        return salesTicketsService.calculatePercentages(selectedItems);
    }

    @GetMapping("/uniqueLibs")
    public List<String> getUniqueLibs() {
        return salesTicketsService.getUniqueLibs();
    }

}
