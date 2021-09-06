package com.rocket_hub.rocket_hub_galamat.ui.controllers.rest;


import com.rocket_hub.rocket_hub_galamat.domain.user.entity.User;
import com.rocket_hub.rocket_hub_galamat.domain.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/home")
public class HomeController {

    @Autowired
    private UserService userService;

    @GetMapping("/{id}")
    public Object home(@PathVariable("id") Long id){
        System.out.println("home starteeeeeeed");
        Optional<User> user = userService.findById(id);
        System.out.println("home + user " + user.toString());
        if (user.isPresent()) {
            return new ResponseEntity<>(user, HttpStatus.OK);
        }
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
}
