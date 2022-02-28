package com.revature.BookingHotel.Daos;

import com.revature.BookingHotel.Models.PayInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PayInfoDao extends JpaRepository<PayInfo, Integer> {
}
