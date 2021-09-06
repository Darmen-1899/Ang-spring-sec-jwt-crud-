package com.rocket_hub.rocket_hub_galamat.configuration.security.user;


import com.rocket_hub.rocket_hub_galamat.domain.user.entity.User;
import com.rocket_hub.rocket_hub_galamat.domain.user.service.UserService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

@Component
public class CustomUserDetailsService implements UserDetailsService {
    @Autowired
    private UserService userService;

    private static final Logger log = LogManager.getLogger(CustomUserDetails.class);

    @Override
    public CustomUserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User userEntity = userService.findByUsername(username);
        log.info(userEntity.getRole());
        log.info(
                userEntity.getUsername()
        );
        return CustomUserDetails.fromUserEntityToCustomUserDetails(userEntity);
    }
}