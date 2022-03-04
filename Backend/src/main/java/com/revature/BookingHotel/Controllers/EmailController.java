package com.revature.BookingHotel.Controllers;


import com.fasterxml.jackson.databind.node.ObjectNode;
import com.revature.BookingHotel.Models.Booking;
import com.revature.BookingHotel.Services.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

import static java.time.temporal.ChronoUnit.DAYS;


@Controller
@RequestMapping(value ="/email")
@CrossOrigin("*")
public class EmailController {

    @Autowired
    private EmailService es;

    public EmailController() {
    }

    public EmailController(EmailService es) {
        this.es = es;
    }

    @PostMapping("/")
    @ResponseBody
    public void sendBookingConfirmation(@RequestBody emailObject eo) {
        String email = eo.email;
        String message = eo.message;
        es.sendAnyEmail(email, message);
        System.out.println("sent email");

    }

    public static class emailObject{
        private String email;
        private String message;

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public String getMessage() {
            return message;
        }

        public void setMessage(String message) {
            this.message = message;
        }

        public emailObject() {
        }

        public emailObject(String email, String message) {
            this.email = email;
            this.message = message;
        }
    }
}
