package com.wisevision.dashboard.entity;


import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Builder
@Document(collection = "productName")
public class ProductName {
    @Id
    private String _id;
    private  String LIB;
}
