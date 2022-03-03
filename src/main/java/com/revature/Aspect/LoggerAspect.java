package com.revature.Aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class LoggerAspect {

    public LoggerAspect() {
    }

    private Logger log = LoggerFactory.getLogger(LoggerAspect.class);

    @Before("execution(* com.revature.BookingHotel.Services.UserService.*(..))")
    public void logStatementBefore(JoinPoint jp) {
        System.out.println("test logging test test" + jp.getSignature());
    }
}
