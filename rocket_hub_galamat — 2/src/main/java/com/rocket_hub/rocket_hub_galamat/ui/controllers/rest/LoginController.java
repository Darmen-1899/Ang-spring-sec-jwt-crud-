package com.rocket_hub.rocket_hub_galamat.ui.controllers.rest;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.rocket_hub.rocket_hub_galamat.configuration.security.jwt.JwtProvider;
import com.rocket_hub.rocket_hub_galamat.domain.user.entity.User;
import com.rocket_hub.rocket_hub_galamat.domain.user.service.UserService;
import com.rocket_hub.rocket_hub_galamat.ui.dto.AuthRequestDto;
import com.rocket_hub.rocket_hub_galamat.ui.dto.AuthResponseDto;
import lombok.extern.java.Log;
import org.apache.tomcat.util.json.JSONParser;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin
@RequestMapping()
public class LoginController {

    @Autowired
    private UserService userService;
    @Autowired
    private JwtProvider jwtProvider;



    @PostMapping("/login")
    public AuthResponseDto login(@RequestBody AuthRequestDto requestDto)  {
        System.out.println("Login started");
        System.out.println("CONTROLLER USERNAME:"+requestDto.getUsername());
        System.out.println("CONTROLLER password:"+requestDto.getPassword());

        User userEntity = userService.findByLoginAndPassword(requestDto.getUsername(), requestDto.getPassword());
        System.out.println(userEntity.getUsername());
        String token = jwtProvider.generateToken(userEntity.getUsername());
        return new AuthResponseDto(token);
    }


}
