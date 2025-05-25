package com.devcambo.usrapi.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundExp extends RuntimeException {

  public ResourceNotFoundExp(String resourceName, String field, String value) {
    super(String.format("%s not found with %s = %s!", resourceName, field, value));
  }
}
