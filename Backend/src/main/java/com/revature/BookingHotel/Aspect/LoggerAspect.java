package com.revature.BookingHotel.Aspect;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class LoggerAspect {

    public LoggerAspect() {
    }

    private Logger log = LoggerFactory.getLogger(LoggerAspect.class);

    @Pointcut(value="execution(* com.revature.BookingHotel.*.*.*(..))")
    public void myPointcut() {
    }

    @Around("myPointcut()")
    public Object aroundLog(ProceedingJoinPoint pjp) throws Throwable {
        ObjectMapper mapper = new ObjectMapper();
        String methodName = pjp.getSignature().getName();
        String className = pjp.getTarget().getClass().toString();
        Object[] array = pjp.getArgs();

        log.info("Method Invoked: [" + className + "]: " + methodName + "()"); // + " | Arguments:" + mapper.writeValueAsString(array));
        Object object = pjp.proceed();
        log.info("[" + className + "]: " + methodName + "()"); // + " | Response: " + mapper.writeValueAsString(object));
        return object;
    }
}
