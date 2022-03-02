package com.revature.BookingHotel.Daos;

import com.revature.BookingHotel.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDao extends JpaRepository<User, Integer> {

    User getUserByUsername(String email);

}