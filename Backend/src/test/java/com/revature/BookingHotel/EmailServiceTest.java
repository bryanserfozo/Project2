package com.revature.BookingHotel;

import com.revature.BookingHotel.Daos.PayInfoDao;

import com.revature.BookingHotel.Models.Booking;
import com.revature.BookingHotel.Models.PayInfo;

import com.revature.BookingHotel.Models.User;
import com.revature.BookingHotel.Services.EmailService;
import com.revature.BookingHotel.Services.PayInfoService;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMailMessage;

import java.sql.Date;

import static org.assertj.core.api.Java6Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class EmailServiceTest {
    @Mock
    private JavaMailSender mailSender;

    EmailService es;

    @BeforeEach
    void initUseCase() {
        es = new EmailService(mailSender);
    }

    @Test
    public void sendRegistrationEmailSuccess() {
        User user = new User();
        user.setEmail("test@test.com");
        user.setFirstName("Schmo");
        user.setLastName("Tel");
        user.setId(0);
        user.setUsername("schmotel");
        user.setPassword("password");
        user.setPhoneNumber("(813)305-0000");

        es.sendRegistrationEmail(user);

        verify(mailSender).send(any(SimpleMailMessage.class));
    }

    @Test
    public void sendConfirmationEmailSuccess() {
        Booking booking = new Booking();
        booking.setBookingId(0);
        Date date = new Date(System.currentTimeMillis());
        booking.setBookingDate(date);
        booking.setCheckInDate(date);
        booking.setCheckOutDate(date);
        booking.setHotel(27);
        booking.setNumNights(1);
        User user = new User();
        user.setEmail("test@test.com");
        booking.setUser(user);

        es.sendBookingEmail(booking);

        verify(mailSender).send(any(SimpleMailMessage.class));
    }

    @Test
    public void sendAnyEmailSuccess() {
        String email = "test@test.com";

        String message = "You shouldn't get this message";

        es.sendAnyEmail(email, message);

        verify(mailSender).send(any(SimpleMailMessage.class));
    }
}
