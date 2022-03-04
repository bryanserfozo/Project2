package com.revature.BookingHotel.Controllers;

import com.revature.BookingHotel.Models.Booking;
import com.revature.BookingHotel.Models.User;
import com.revature.BookingHotel.Services.BookingService;
import com.revature.BookingHotel.Services.EmailService;
import com.revature.BookingHotel.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

import static java.time.temporal.ChronoUnit.DAYS;

@Controller
@RequestMapping(value = "/booking")
@CrossOrigin("*")

public class BookingController {

    private BookingService bs;
    private UserService us;

    @Autowired
    private EmailService es;

    public BookingController() {
    }

    @Autowired
    public BookingController(BookingService bs, UserService us) {
        this.bs = bs;
        this.us = us;
    }

    @PostMapping("/")
    @ResponseBody
    public Booking createBooking(@RequestBody Booking bk) {
        String checkInDate = String.valueOf(bk.getCheckInDate());
        String checkOutDate = String.valueOf(bk.getCheckOutDate());

        LocalDate checkIn = LocalDate.parse(checkInDate);
        LocalDate checkOut = LocalDate.parse(checkOutDate);
        long numNights = DAYS.between(checkIn, checkOut);

        bk.setNumNights(numNights);
//        es.sendBookingEmail(bk);
        return bs.createBooking(bk);
    }

    @GetMapping("/all/")
    @ResponseBody
    public List<Booking> getAllBookingByUserId(@RequestHeader int id) {


        return bs.getAllBookingByUserId(id);
    }

    @GetMapping("/")
    @ResponseBody
    public Booking getBookingById(@RequestHeader int id) {
        return bs.getBookingById(id);
    }

    @PutMapping("/")
    @ResponseBody
    public void updateBooking(@RequestBody Booking bk) {
        bs.updateBooking(bk);
    }

}