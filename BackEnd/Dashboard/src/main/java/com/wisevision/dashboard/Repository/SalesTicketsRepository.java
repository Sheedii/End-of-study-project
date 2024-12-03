package com.wisevision.dashboard.Repository;

import com.wisevision.dashboard.entity.salesTickets;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SalesTicketsRepository extends MongoRepository<salesTickets, ObjectId> {

}
