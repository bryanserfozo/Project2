package com.revature.BookingHotel.Services;

import com.revature.BookingHotel.Daos.UserDao;
import com.revature.BookingHotel.Models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class UserService {

    private UserDao ud;

    public UserService() {
    }

    @Autowired
    public UserService(UserDao ud) {
        this.ud = ud;
    }

    //Register new user
    public User registerUser(int id, String first, String last, String username, String password, String email, String phoneNumber) {
        String fixEmail = email.trim().toLowerCase();
        User u = new User(id, first, last, username, password, fixEmail, phoneNumber);
        return ud.save(u);
    }

    //Get user by id
    public User getUserById(int id) {
        return ud.getById(id);
    }

    //Get user by username
    public User getUserByUsername(String username) {
        return ud.getUserByUsername(username);
    }

    //Update user
    public User updateUser(User u) {
        return ud.save(u);
    }



}