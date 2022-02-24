package com.revature.BookingHotel.Services;

import com.revature.BookingHotel.Daos.PayInfoDao;
import com.revature.BookingHotel.Models.Booking;
import com.revature.BookingHotel.Models.PayInfo;
import com.revature.BookingHotel.Models.PaymentType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class PayInfoService {

    PayInfoDao pid;

    public PayInfoService() {

    }

    @Autowired
    public PayInfoService(PayInfoDao pid) {
        this.pid = pid;
    }

    //Create payment info
    public PayInfo createPayInfo(int paymentId, Booking booking, String firstName, String lastName, int cardNumber, PaymentType type) {
        PayInfo pi = new PayInfo(paymentId, booking, firstName, lastName, cardNumber, type);
        return pid.save(pi);
    }

    //Get payment info by id
    public PayInfo getPayInfoById(int id) {
        return pid.getById(id);
    }

    //Update payment info
    public void updatePayInfo(PayInfo pi) {
        pid.save(pi);
    }

    //Delete payment info
    public void deletePayInfo(PayInfo pi) {
        pid.delete(pi);
    }
}
