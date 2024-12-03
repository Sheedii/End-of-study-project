package com.wisevision.dashboard.Repository;

import com.wisevision.dashboard.entity.FormData;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FormDataRepository extends MongoRepository<FormData, String> {

}
