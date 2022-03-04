package com.revature.BookingHotel.Models;

public class Hotel {

    private int hotelId;
    private String name;
    private double guestRating;
    private int price;
    private HotelAddress address;
    private int roomsLeft;

    public Hotel() {
    }

    public Hotel(int hotelId, String name, double guestRating, int price, HotelAddress address, int roomsLeft) {
        this.hotelId = hotelId;
        this.name = name;
        this.guestRating = guestRating;
        this.price = price;
        this.address = address;
        this.roomsLeft = roomsLeft;
    }

    public int getHotelId() {
        return hotelId;
    }

    public void setHotelId(int hotelId) {
        this.hotelId = hotelId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getGuestRating() {
        return guestRating;
    }

    public void setGuestRating(double guestRating) {
        this.guestRating = guestRating;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public HotelAddress getAddress() {
        return address;
    }

    public void setAddress(HotelAddress address) {
        this.address = address;
    }

    public int getRoomsLeft() {
        return roomsLeft;
    }

    public void setRoomsLeft(int roomsLeft) {
        this.roomsLeft = roomsLeft;
    }

    @Override
    public String toString() {
        return "Hotel{" +
                "hotelId=" + hotelId +
                ", name='" + name + '\'' +
                ", guestRating=" + guestRating +
                ", price=" + price +
                ", address=" + address +
                ", roomsLeft=" + roomsLeft +
                '}';
    }
}
