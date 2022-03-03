package com.revature.BookingHotel.Models;
import javax.persistence.*;

@Entity
@Table(name = "pay_info")
public class PayInfo {

    @Id
    @Column(name="payment_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int paymentId;

    @Column(name = "user_id", nullable = false, unique = true)
    private int userId;


    @Column(name = "first_name", nullable = false)
    private String firstName;


    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(name = "card_number", nullable = false)
    private int cardNumber;

    public PayInfo() {
    }

    public PayInfo(int paymentId, int userId, String firstName, String lastName, int cardNumber) {
        this.paymentId = paymentId;
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.cardNumber = cardNumber;
    }

    public int getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(int paymentId) {
        this.paymentId = paymentId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
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

    @Override
    public String toString() {
        return "PayInfo{" +
                "paymentId=" + paymentId +
                ", userId=" + userId +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", cardNumber=" + cardNumber +
                '}';
    }
}