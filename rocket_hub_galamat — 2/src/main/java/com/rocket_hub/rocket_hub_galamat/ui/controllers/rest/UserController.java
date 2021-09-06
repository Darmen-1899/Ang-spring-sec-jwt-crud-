package com.rocket_hub.rocket_hub_galamat.ui.controllers.rest;


import com.rocket_hub.rocket_hub_galamat.domain.user.repository.UserRepository;
import com.rocket_hub.rocket_hub_galamat.infrastructure.exceptions.UserNotFoundException;
import com.rocket_hub.rocket_hub_galamat.domain.user.entity.User;
import com.rocket_hub.rocket_hub_galamat.domain.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private final UserService userService;



    public UserController(UserService userService, UserRepository userRepository) {
        this.userService = userService;

    }

    @GetMapping("/all")
    public Object getAllUsers (){
        List<User> users = userService.findAll();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public Object getUserById(@PathVariable("id") Long id){
        Optional<User> user = userService.findById(id);
        if (user.isPresent()) {
            return new ResponseEntity<>(user, HttpStatus.OK);
        }
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<User> addEmployee(@RequestBody User user) {
        User newUser = userService.save(user);
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }


    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateUser(@PathVariable(value = "id")Long userId,@RequestBody User user) throws UserNotFoundException
    {

        User newUser = userService.findById(userId)
                .orElseThrow(() -> new UserNotFoundException("Employee not found for this id :: " + userId));


       newUser.setUsername(user.getUsername());
       newUser.setPassword(user.getPassword());
       newUser.setFirstname(user.getFirstname());
       newUser.setLastname(user.getLastname());
       newUser.setAvatar(user.getAvatar());
       newUser.setPosition(user.getPosition());
       newUser.setRole(user.getRole());
       final User updatedUser = userService.update(user);
       return new ResponseEntity<>(updatedUser,HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable("id") Long id) {
        userService.deleteUser(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
