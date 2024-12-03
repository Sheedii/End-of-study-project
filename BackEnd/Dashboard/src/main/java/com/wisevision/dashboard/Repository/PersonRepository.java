package com.wisevision.dashboard.Repository;

import com.wisevision.dashboard.entity.person;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PersonRepository extends MongoRepository<person, String> {

}
