package com.revature.BookingHotel;

import com.revature.BookingHotel.Daos.PayInfoDao;

import com.revature.BookingHotel.Models.PayInfo;

import com.revature.BookingHotel.Services.PayInfoService;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.assertj.core.api.Java6Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class PayInfoServiceTest {
    @Mock
    private PayInfoDao pid;

    PayInfoService piss;

    @BeforeEach
    void initUseCase() {
        piss = new PayInfoService(pid);
    }

    @Test
    public void createPayInfoSuccess() {
        PayInfo pi = new PayInfo();
        pi.setPaymentId(1);
        pi.setUserId(47);
        pi.setFirstName("Schmo");
        pi.setLastName("Tel");
        pi.setCardNumber(8675309);

        when(pid.save(any(PayInfo.class))).thenReturn(pi);

        PayInfo test = piss.createPayInfo(21,23,"Test", "Test", 305);
        assertThat(test.getFirstName()).isNotNull();
    }

    @Test
    public void pullPayInfoFromDatabaseIdSuccess() {
        PayInfo pi = new PayInfo();
        pi.setPaymentId(1);
        pi.setUserId(47);
        pi.setFirstName("Schmo");
        pi.setLastName("Tel");
        pi.setCardNumber(8675309);

        // providing knowledge
        when(pid.getById(any())).thenReturn(pi);

        PayInfo test = piss.getPayInfoById(47);
        assertThat(test.getFirstName()).isNotNull();
    }

    @Test
    public void pullPayInfoFromDatabaseUserIdSuccess() {
        PayInfo pi = new PayInfo();
        pi.setPaymentId(1);
        pi.setUserId(47);
        pi.setFirstName("Schmo");
        pi.setLastName("Tel");
        pi.setCardNumber(8675309);

        // providing knowledge
        when(pid.getPayInfoByUserId(any(int.class))).thenReturn(pi);

        PayInfo test = piss.getPayInfoByUserId(47);
        assertThat(test.getFirstName()).isNotNull();
    }

    @Test
    public void updatePayInfoSuccess() {
        PayInfo pi = new PayInfo();
        pi.setPaymentId(1);
        pi.setUserId(47);
        pi.setFirstName("Schmo");
        pi.setLastName("Tel");
        pi.setCardNumber(8675309);

        // providing knowledge
        when(pid.save(any(PayInfo.class))).thenReturn(pi);

        PayInfo test = piss.updatePayInfo(pi);
        assertThat(test.getFirstName()).isNotNull();
    }

}
