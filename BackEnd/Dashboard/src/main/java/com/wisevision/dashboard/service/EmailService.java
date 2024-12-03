package com.wisevision.dashboard.service;

import com.wisevision.dashboard.entity.FormData;
import org.springframework.mail.MailException;

public interface EmailService {
    void sendFormEmail(FormData formData) throws MailException;
}