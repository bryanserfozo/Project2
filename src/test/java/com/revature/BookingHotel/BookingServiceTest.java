package com.revature.BookingHotel;

import com.revature.BookingHotel.Daos.BookingDao;
import com.revature.BookingHotel.Models.Booking;
import com.revature.BookingHotel.Models.User;
import com.revature.BookingHotel.Services.BookingService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Java6Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class BookingServiceTest {
    @Mock
    private BookingDao bd;

    BookingService bs;

    @BeforeEach
    void initUseCase() {
        bs = new BookingService(bd);
    }

    @Test
    public void createBookingSuccess() {
        Booking booking = new Booking();
        booking.setBookingId(0);
        Date date = new Date(System.currentTimeMillis());
        booking.setBookingDate(date);
        booking.setCheckInDate(date);
        booking.setCheckOutDate(date);
        booking.setHotel(27);
        booking.setNumNights(1);
        User user = new User();
        booking.setUser(user);

        // providing knowledge
        when(bd.save(any(Booking.class))).thenReturn(booking);

        Booking testBooking = bs.createBooking(booking);
        assertThat(booking.getBookingId()).isNotNull();
    }

    @Test
    public void getAllBookingsByUserIdSuccess() {
        Booking booking = new Booking();
        booking.setBookingId(0);
        Date date = new Date(System.currentTimeMillis());
        booking.setBookingDate(date);
        booking.setCheckInDate(date);
        booking.setCheckOutDate(date);
        booking.setHotel(27);
        booking.setNumNights(1);
        User user = new User();
        booking.setUser(user);

        List<Booking> bookingList = new ArrayList<>();
        bookingList.add(booking);

        // providing knowledge
        when(bd.getAllBookingByUserId(any(int.class))).thenReturn(bookingList);

        List<Booking> testList = bs.getAllBookingByUserId(12);
        assertThat(testList.size()).isGreaterThan(0);
    }




    @Test
    public void getBookingByIdSuccess() {
        Booking booking = new Booking();
        booking.setBookingId(0);
        Date date = new Date(System.currentTimeMillis());
        booking.setBookingDate(date);
        booking.setCheckInDate(date);
        booking.setCheckOutDate(date);
        booking.setHotel(27);
        booking.setNumNights(1);
        User user = new User();
        booking.setUser(user);

        // providing knowledge
        when(bd.getById(any(int.class))).thenReturn(booking);

        Booking testBooking = bs.getBookingById(12);
        assertThat(booking.getBookingId()).isNotNull();
    }


    @Test
    public void updateBookingSuccess() {
        Booking booking = new Booking();
        booking.setBookingId(0);
        Date date = new Date(System.currentTimeMillis());
        booking.setBookingDate(date);
        booking.setCheckInDate(date);
        booking.setCheckOutDate(date);
        booking.setHotel(27);
        booking.setNumNights(1);
        User user = new User();
        booking.setUser(user);

        // providing knowledge
        when(bd.save(any(Booking.class))).thenReturn(booking);

        Booking testBooking = bs.updateBooking(booking);
        assertThat(booking.getBookingId()).isNotNull();
    }

}
