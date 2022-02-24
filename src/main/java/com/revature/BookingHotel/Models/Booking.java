package com.revature.BookingHotel.Models;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "booking")
public class Booking {

    @Id
    @Column(name="booking_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int bookingId;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private User user;

    @OneToOne(mappedBy = "hotel", cascade = CascadeType.ALL)
    private Hotel hotel;

    @Column(name="booking_date", nullable = false)
    private Date bookingDate;

    @Column(name="check_in_date", nullable = false)
    private Date checkInDate;

    @Column(name="check_out_date", nullable = false)
    private Date checkOutDate;

    @Column(name="num_nights", nullable = false)
    private int numNights;

    public Booking() {
    }

    public Booking(int bookingId, User user, Hotel hotel, Date bookingDate, Date checkInDate, Date checkOutDate, int numNights) {
        this.bookingId = bookingId;
        this.user = user;
        this.hotel = hotel;
        this.bookingDate = bookingDate;
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
        this.numNights = numNights;
    }

    public int getBookingId() {
        return bookingId;
    }

    public void setBookingId(int bookingId) {
        this.bookingId = bookingId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Hotel getHotel() {
        return hotel;
    }

    public void setHotel(Hotel hotel) {
        this.hotel = hotel;
    }

    public Date getBookingDate() {
        return bookingDate;
    }

    public void setBookingDate(Date bookingDate) {
        this.bookingDate = bookingDate;
    }

    public Date getCheckInDate() {
        return checkInDate;
    }

    public void setCheckInDate(Date checkInDate) {
        this.checkInDate = checkInDate;
    }

    public Date getCheckOutDate() {
        return checkOutDate;
    }

    public void setCheckOutDate(Date checkOutDate) {
        this.checkOutDate = checkOutDate;
    }

    public int getNumNights() {
        return numNights;
    }

    public void setNumNights(int numNights) {
        this.numNights = numNights;
    }

    @Override
    public String toString() {
        return "Booking{" +
                "bookingId=" + bookingId +
                ", user=" + user +
                ", hotel=" + hotel +
                ", bookingDate=" + bookingDate +
                ", checkInDate=" + checkInDate +
                ", checkOutDate=" + checkOutDate +
                ", numNights=" + numNights +
                '}';
    }
}
