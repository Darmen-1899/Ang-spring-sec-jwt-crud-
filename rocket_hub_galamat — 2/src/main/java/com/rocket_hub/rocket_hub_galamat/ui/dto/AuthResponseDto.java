package com.rocket_hub.rocket_hub_galamat.ui.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
public class AuthResponseDto {
    private String token;

    public AuthResponseDto(String token) {
        this.token = token;
    }
}
