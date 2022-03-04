package com.revature.BookingHotel.Daos;

import com.revature.BookingHotel.Models.Booking;
import com.revature.BookingHotel.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookingDao extends JpaRepository<Booking, Integer> {

    List<Booking> getAllBookingByUserId(int id);
}