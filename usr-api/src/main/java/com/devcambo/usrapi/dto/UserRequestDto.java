package com.devcambo.usrapi.dto;

import com.devcambo.usrapi.validation.UniqueEmail;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;

public record UserRequestDto(
  @NotEmpty(message = "First name cannot be empty!")
  @Size(min = 2, max = 100, message = "First name must be between 2 and 100 characters!")
  String firstName,

  @NotEmpty(message = "Last name cannot be empty!")
  @Size(min = 2, max = 100, message = "Last name must be between 2 and 100 characters!")
  String lastName,

  @NotEmpty(message = "Email cannot be empty!")
  @Size(min = 5, max = 100, message = "Email must be between 5 and 100 characters!")
  @Email(message = "Invalid email address!")
  @UniqueEmail
  String email
) {}
