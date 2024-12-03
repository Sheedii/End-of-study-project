package com.wisevision.dashboard.controller;

import com.wisevision.dashboard.serviceImp.ProductNameServiceImp;
import com.wisevision.dashboard.serviceImp.ProductsServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/dashboard")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductNameController {
    private final ProductNameServiceImp productNameService;

    @Autowired
    public ProductNameController(ProductNameServiceImp productNameService) {
        this.productNameService = productNameService;
    }

    @GetMapping("/Names")
    public List<String> getNames() {
        return productNameService.findAllNames();
    }
}
