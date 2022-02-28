package com.revature.BookingHotel.Controllers;

import com.revature.BookingHotel.Models.User;
import com.revature.BookingHotel.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(value ="/user")
@CrossOrigin("*")
public class UserController {

    private UserService us;

    public UserController() {
    }

    @Autowired
    public UserController(UserService us) {
        this.us = us;
    }

    @PostMapping("/")
    @ResponseBody
    public User registerUser(@RequestBody User u) {
        return us.registerUser(u.getId(), u.getFirstName(), u.getLastName(), u.getUsername(), u.getPassword(), u.getEmail(), u.getPhoneNumber());
    }

    @GetMapping("/id/")
    @ResponseBody
    public User getUserById(@RequestHeader int id) {
        return us.getUserById(id);
    }

    @GetMapping("/")
    @ResponseBody
    public User getUserByUsername(@RequestHeader String username) {
        return us.getUserByUsername(username);
    }

    @PutMapping("/")
    @ResponseBody
    public void updateUser(@RequestBody User u) {
        us.updateUser(u);
    }

    @DeleteMapping("/")
    @ResponseBody
    public void deleteUser(@RequestBody User u) {
        us.deletePerson(u);
    }
}
