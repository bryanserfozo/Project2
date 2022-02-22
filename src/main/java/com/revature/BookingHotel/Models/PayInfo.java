package com.revature.BookingHotel.Models;

public class PayInfo {

    private int paymentId;
    private Booking booking;
    private String firstName;
    private String lastName;
    private int cardNumber;
    private PaymentType type;

    public PayInfo() {
    }

    public PayInfo(int paymentId, Booking booking, String firstName, String lastName, int cardNumber, PaymentType type) {
        this.paymentId = paymentId;
        this.booking = booking;
        this.firstName = firstName;
        this.lastName = lastName;
        this.cardNumber = cardNumber;
        this.type = type;
    }

    public int getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(int paymentId) {
        this.paymentId = paymentId;
    }

    public Booking getBooking() {
        return booking;
    }

    public void setBooking(Booking booking) {
        this.booking = booking;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public int getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(int cardNumber) {
        this.cardNumber = cardNumber;
    }

    public PaymentType getType() {
        return type;
    }

    public void setType(PaymentType type) {
        this.type = type;
    }

    @Override
    public String toString() {
        return "PayInfo{" +
                "paymentId=" + paymentId +
                ", booking=" + booking +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", cardNumber=" + cardNumber +
                ", type=" + type +
                '}';
    }
}
