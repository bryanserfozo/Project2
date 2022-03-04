package com.revature.BookingHotel;

import com.revature.BookingHotel.Daos.UserDao;
import com.revature.BookingHotel.Models.User;
import com.revature.BookingHotel.Services.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.assertj.core.api.Java6Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class UserServiceTest {
    @Mock
    private UserDao ud;

    UserService us;

    @BeforeEach
    void initUseCase() {
        us = new UserService(ud);
    }

    @Test
    public void registerUserSuccess() {
        User user = new User();
        user.setEmail("test@testemail.com");
        user.setFirstName("Schmo");
        user.setLastName("Tel");
        user.setId(0);
        user.setUsername("schmotel");
        user.setPassword("password");
        user.setPhoneNumber("(813)305-0000");

        // providing knowledge
        when(ud.save(any(User.class))).thenReturn(user);

        User savedUser = us.registerUser(0, "Schmo", "Tel", "schmotel", "password", "test@testemail.com", "(813)305-0000");
        assertThat(savedUser.getFirstName()).isNotNull();
    }

    @Test
    public void pullUserFromDatabaseUsernameSuccess() {
        User user = new User();
        user.setEmail("test@testemail.com");
        user.setFirstName("Schmo");
        user.setLastName("Tel");
        user.setId(0);
        user.setUsername("schmotel");
        user.setPassword("password");
        user.setPhoneNumber("(813)305-0000");

        // providing knowledge
        when(ud.getUserByUsername(any())).thenReturn(user);

        User pulledUser = us.getUserByUsername("test");
        assertThat(pulledUser.getFirstName()).isNotNull();
    }

    @Test
    public void pullUserFromDatabaseIdSuccess() {
        User user = new User();
        user.setEmail("test@testemail.com");
        user.setFirstName("Schmo");
        user.setLastName("Tel");
        user.setId(0);
        user.setUsername("schmotel");
        user.setPassword("password");
        user.setPhoneNumber("(813)305-0000");

        // providing knowledge
        when(ud.getById(any())).thenReturn(user);

        User pulledUser = us.getUserById(47);
        assertThat(pulledUser.getFirstName()).isNotNull();
    }

    @Test
    public void updateUserSuccess() {
        User user = new User();
        user.setEmail("test@testemail.com");
        user.setFirstName("Schmo");
        user.setLastName("Tel");
        user.setId(0);
        user.setUsername("schmotel");
        user.setPassword("password");
        user.setPhoneNumber("(813)305-0000");

        // providing knowledge
        when(ud.save(any(User.class))).thenReturn(user);

        User savedUser = us.updateUser(user);
        assertThat(savedUser.getFirstName()).isNotNull();
    }



}

