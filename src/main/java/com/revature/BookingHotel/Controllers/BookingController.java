package com.revature.BookingHotel.Controllers;

import com.revature.BookingHotel.Models.Booking;
import com.revature.BookingHotel.Models.User;
import com.revature.BookingHotel.Services.BookingService;
import com.revature.BookingHotel.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping(value = "/booking")
@CrossOrigin("*")

public class BookingController {

    private BookingService bs;
    private UserService us;

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
        return bs.createBooking(bk.getBookingId(), bk.getUser(), bk.getHotel(), bk.getBookingDate(), bk.getCheckInDate(), bk.getCheckOutDate(), bk.getNumNights());
    }

    @GetMapping("/all/")
    @ResponseBody
    public List<Booking> getAllBookingByUserId(@RequestBody int id) {
        User u = us.getUserById(id);
        return bs.getAllBookingByUserId(u);
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

    @DeleteMapping("/")
    @ResponseBody
    public void deleteBooking(@RequestBody Booking bk) {
        bs.deleteBooking(bk);
    }
}


