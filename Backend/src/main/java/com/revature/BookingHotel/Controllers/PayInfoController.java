package com.revature.BookingHotel.Controllers;

import com.revature.BookingHotel.Models.PayInfo;
import com.revature.BookingHotel.Services.PayInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(value = "/pay-info")
@CrossOrigin("*")

public class PayInfoController {

    private PayInfoService pis;

    public PayInfoController() {
    }

    @Autowired
    public PayInfoController(PayInfoService pis) {
        this.pis = pis;
    }

    @PostMapping("/")
    @ResponseBody
    public PayInfo createPayInfo(@RequestBody PayInfo pi) {
        return pis.createPayInfo(pi.getPaymentId(), pi.getUserId(), pi.getFirstName(), pi.getLastName(), pi.getCardNumber());
    }

    @GetMapping("/")
    @ResponseBody
    public PayInfo getPayInfoById(@RequestHeader int id) {
        return pis.getPayInfoByUserId(id);
    }

    @PutMapping("/")
    @ResponseBody
    public void updatePayInfo(@RequestBody PayInfo pi) {
        pis.updatePayInfo(pi);
    }

}