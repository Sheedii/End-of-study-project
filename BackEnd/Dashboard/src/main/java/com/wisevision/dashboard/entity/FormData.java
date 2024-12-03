package com.wisevision.dashboard.entity;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Builder
@Document(collection = "form_data")
public class FormData {

    @Id
    private String id;
    private String firstName;
    private String lastName;
    private String companyName;
    private String email;
    private String telephone;
    private String description;


}
