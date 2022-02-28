package com.revature.BookingHotel.Models;

import javax.persistence.*;

@Entity
@Table(name = "pay_info")
public class PayInfo {

    @Id
    @Column(name="payment_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int paymentId;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", referencedColumnName = "user_id", unique = true)
    private User paymentUser;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(name = "card_number", nullable = false)
    private int cardNumber;

    @Column(name = "payment_type", nullable = false)
    private PaymentType type;

    public PayInfo() {
    }

    public PayInfo(int paymentId, User paymentUser, String firstName, String lastName, int cardNumber, PaymentType type) {
        this.paymentId = paymentId;
        this.paymentUser = paymentUser;
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

    public User getUser() {
        return paymentUser;
    }

    public void setUser(User user) {
        this.paymentUser = user;
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
                ", user=" + paymentUser +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", cardNumber=" + cardNumber +
                ", type=" + type +
                '}';
    }
}