package com.wisevision.dashboard.serviceImp;

import com.wisevision.dashboard.entity.FormData;
import com.wisevision.dashboard.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;


@Service
public class EmailServiceImpl implements EmailService {
    @Autowired
    private JavaMailSender emailSender;

    @Override
    public void sendFormEmail(FormData formData) throws MailException {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo("chadi.amaranebli@enicar.ucar.tn"); // replace with your email
        message.setSubject("New Form Submission");
        message.setText("This email is from WiseVision WebSite Visitor to Book a Demo" + "\n" +
                "First Name: " + formData.getFirstName() + "\n" +
                "Last Name: " + formData.getLastName() + "\n" +
                "Company Name: " + formData.getCompanyName() + "\n" +
                "Email: " + formData.getEmail() + "\n" +
                "Telephone: " + formData.getTelephone() + "\n" +
                "Description: " + formData.getDescription());
        emailSender.send(message);
    }
}
