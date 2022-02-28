package com.revature.BookingHotel.Services;

import com.revature.BookingHotel.Models.Booking;
import com.revature.BookingHotel.Models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendRegistrationEmail(User u) {

        SimpleMailMessage message = new SimpleMailMessage();

        String msg = "Congratulations " + u.getFirstName() + " " + u.getLastName() + ", you have been registered";

        message.setFrom("no.reply.schmotel@gmail.com");
        message.setTo(u.getEmail());
        message.setText(msg);
        message.setSubject("Schmotel Registration");

        mailSender.send(message);
        System.out.println("Mail Send...");

    }

    public void sendBookingEmail(Booking bk) {

        SimpleMailMessage message = new SimpleMailMessage();
        User u = bk.getUser();

        String msg = "Congratulations " + u.getFirstName() + " " + u.getLastName() + ", you have successfully booked on " + bk.getCheckInDate() + " to " + bk.getCheckOutDate() +
                " for a total of " + bk.getNumNights() + " nights!";

        message.setFrom("no.reply.schmotel@gmail.com");
        message.setTo(u.getEmail());
        message.setText(msg);
        message.setSubject("Schmotel Booking Confirmation");

        mailSender.send(message);
        System.out.println("Mail Send...");

    }
}