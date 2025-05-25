package com.devcambo.usrapi.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.time.LocalDateTime;

public record UserDto(
  Long userId,
  String firstName,
  String lastName,
  String email,
  @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss a") LocalDateTime createdAt
) {}
