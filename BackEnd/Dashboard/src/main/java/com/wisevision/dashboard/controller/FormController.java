package com.wisevision.dashboard.controller;

import com.wisevision.dashboard.entity.FormData;
import com.wisevision.dashboard.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/form")
@CrossOrigin(origins = "http://localhost:3000")
public class FormController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/submit")
    public ResponseEntity<String> submitForm(@RequestBody FormData formData) {
        try {
            emailService.sendFormEmail(formData);
            return ResponseEntity.ok("Form submitted successfully!");
        } catch (MailException e) {
            return ResponseEntity.status(500).body("Error sending email: " + e.getMessage());
        }
    }

}
