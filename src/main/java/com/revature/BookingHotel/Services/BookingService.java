package com.revature.BookingHotel.Services;

import com.revature.BookingHotel.Daos.BookingDao;
import com.revature.BookingHotel.Models.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Date;
import java.util.List;

@Service
@Transactional
public class BookingService {

    BookingDao bd;

    public BookingService() {

    }

    @Autowired
    public BookingService(BookingDao bd) {
        this.bd = bd;
    }

    //Create booking
    public Booking createBooking(Booking bk) {
        return bd.save(bk);
    }

    //Get all bookings by user ID
    public List<Booking> getAllBookingByUserId(User u) {
        return bd.getAllBookingByUserId(u);
    }

    //Get booking info by id
    public Booking getBookingById(int id) {
        return bd.getById(id);
    }

    //Update booking
    public void updateBooking(Booking bk) {
        bd.save(bk);
    }

    //Delete booking
    public void deleteBooking(Booking bk) {
        bd.delete(bk);
    }
}