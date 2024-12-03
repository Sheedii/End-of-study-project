package com.wisevision.dashboard.Repository;

import com.wisevision.dashboard.entity.ProductName;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductNameRepository extends MongoRepository<ProductName,String> {

}
