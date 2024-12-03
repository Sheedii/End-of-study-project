package com.wisevision.dashboard.entity;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Date;
import java.util.List;

@Data
@Builder
@Document(collection = "person2")
public class person {
    @Id
    private String _id;

    @Field("version")
    private String version;

    @Field("id")
    private int id;

    @Field("@timestamp")
    private String timestamp;

    @Field("sensorId")
    private String sensorId;

    @Field("objects")
    private List<String> objects;

}
