package com.wisevision.dashboard.Repository;

import com.wisevision.dashboard.entity.Products;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.util.List;

@Repository
public interface ProductsRepository extends MongoRepository<Products,String> {
    @Query("{'LIB': ?0, 'FK_JOUR': {'$gte': ?1, '$lte': ?2}}")
    List<Products> findByLibAndFkJourBetween(String lib, Date firstDate, Date lastDate);

    @Query("{'FK_JOUR': { $gte: ?0, $lt: ?1 }}")
    List<Products> findProductsSoldBetweenDates(java.sql.Date startDate, java.sql.Date endDate);

    @Query("{'LIB': {'$regex': ?0, '$options': 'i'}}")
    List<Products> findByLIBStartingWith(String name);




    @Query("{'FK_JOUR': { $gte: ?0 }}")
    List<Products> findProductsSoldSinceDate(java.sql.Date startDate);


    @Query("{'FK_JOUR': ?0}")
    List<Products> findProductsSoldOnDate(java.sql.Date date);

}
