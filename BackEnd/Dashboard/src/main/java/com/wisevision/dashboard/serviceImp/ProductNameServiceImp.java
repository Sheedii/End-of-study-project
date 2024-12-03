package com.wisevision.dashboard.serviceImp;

import com.wisevision.dashboard.Repository.ProductNameRepository;
import com.wisevision.dashboard.Repository.ProductsRepository;
import com.wisevision.dashboard.entity.ProductName;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductNameServiceImp {

    private final ProductNameRepository productNameRepository;

    @Autowired
    public ProductNameServiceImp(ProductNameRepository productNameRepository) {
        this.productNameRepository = productNameRepository;
    }


    public List<String> findAllNames() {
        List<ProductName> products = productNameRepository.findAll();
        return products.stream()
                .map(ProductName::getLIB)
                .distinct()
                .collect(Collectors.toList());
    }

}
