package com.devcambo.usrapi.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.time.LocalDateTime;
import lombok.Data;
import org.springframework.http.HttpStatus;

@Data
public class ErrorResponseDto {

  private String apiPath;
  private HttpStatus errorCode;
  private String errorMessage;

  @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss a")
  private LocalDateTime errorTime;
}
