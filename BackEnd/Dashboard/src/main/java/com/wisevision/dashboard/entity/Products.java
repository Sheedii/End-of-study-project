package com.wisevision.dashboard.entity;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@Builder
@Document(collection = "products2")
public class Products {

    @Id
    private String _id;
    private Date FK_JOUR;
    private Double QT;
    private String LIB;
    private Double unit_price;
    private Double revenue;

}
