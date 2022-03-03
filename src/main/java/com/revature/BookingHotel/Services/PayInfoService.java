package com.revature.BookingHotel.Services;

import com.revature.BookingHotel.Daos.PayInfoDao;
import com.revature.BookingHotel.Models.PayInfo;
import com.revature.BookingHotel.Models.PaymentType;
import com.revature.BookingHotel.Models.User;
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
    public PayInfo createPayInfo(int paymentId, int userId, String firstName, String lastName, int cardNumber) {
        PayInfo pi = new PayInfo(paymentId, userId, firstName, lastName, cardNumber);
        return pid.save(pi);
    }

    //Get payment info by id
    public PayInfo getPayInfoById(int id) {
        return pid.getById(id);
    }

    public PayInfo getPayInfoByUserId(int id) {
        return pid.getPayInfoByUserId(id);
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