package com.wisevision.dashboard.entity;

import lombok.Builder;
import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;

@Data
@Builder
@Document(collection = "dataComplete")
public class salesTickets {

    @Id
    private ObjectId id;

    @Field("NUM_TICKET")
    private Integer numTicket;

    @Field("HEURE_VENTE")
    private String heureVente;

    @Field("FK_ARTICLE")
    private List<String> fkArticle;

    @Field("LIB_LIST")
    private List<String> libList;
}
