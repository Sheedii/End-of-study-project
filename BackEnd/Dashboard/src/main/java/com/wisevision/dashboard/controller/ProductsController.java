package com.wisevision.dashboard.controller;

import com.wisevision.dashboard.entity.Products;
import com.wisevision.dashboard.serviceImp.ProductsServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/dashboard")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductsController {


    private final ProductsServiceImp productsService;

    @Autowired
    public ProductsController(ProductsServiceImp productsService) {
        this.productsService = productsService;
    }

    @GetMapping("/top10Products")
    public Map<String, List<Double>> getTopProductsRanking(@RequestParam(defaultValue = "30") int days) {
        return productsService.getTopProductsRanking(days);
    }

    @GetMapping("/allRevenue")
    public Double getTotalRevenueByLibAndFkJourBetween(
            @RequestParam String lib,
            @RequestParam Date firstDate,
            @RequestParam Date lastDate) {
        return productsService.getTotalRevenueByLibAndFkJourBetween(lib, firstDate, lastDate);
    }

    @GetMapping("/quantity")
    public Double getTotalQuantityByLibAndFkJourBetween(
            @RequestParam String lib,
            @RequestParam Date firstDate,
            @RequestParam Date lastDate) {
        return productsService.getTotalQuantityByLibAndFkJourBetween(lib, firstDate, lastDate);
    }

    @GetMapping("/products")
    public List<Products> getProductsByLibAndFkJourBetween(
            @RequestParam String lib,
            @RequestParam Date firstDate,
            @RequestParam Date lastDate) {
        return productsService.getProductsByLibAndFkJourBetween(lib, firstDate, lastDate);
    }

    @GetMapping("/search")
    public List<String> getProductsStartWith(@RequestParam("name") String name) {
        return productsService.getProductsStartWith(name);
    }

    @GetMapping("/uniqueLIB")
    public List<String> getUniqueLIB() {
        return productsService.findAllUniqueLIB();
    }







}
