package com.wisevision.dashboard.controller;

import com.wisevision.dashboard.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/Map")
@CrossOrigin(origins = "http://localhost:3000")
public class PersonController {

    @Autowired
    private PersonService personService;

    @GetMapping("/api/hexagon-person-count")
    public Map<String, Integer> getHexagonPersonCount() {
        return personService.calculateHexagonPersonCount();
    }
}
