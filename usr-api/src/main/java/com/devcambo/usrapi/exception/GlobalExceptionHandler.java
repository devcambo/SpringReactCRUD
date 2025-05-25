package com.devcambo.usrapi.exception;

import com.devcambo.usrapi.dto.ErrorResponseDto;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
@Slf4j
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

  @Override
  protected ResponseEntity<Object> handleMethodArgumentNotValid(
    MethodArgumentNotValidException ex,
    HttpHeaders headers,
    HttpStatusCode status,
    WebRequest request
  ) {
    log.error("Validation error: {}", ex.getMessage());
    Map<String, String> validationErrors = new HashMap<>();
    List<ObjectError> validationErrorList = ex.getBindingResult().getAllErrors();

    validationErrorList.forEach(error -> {
      String fieldName = ((FieldError) error).getField();
      String validationMsg = error.getDefaultMessage();
      validationErrors.put(fieldName, validationMsg);
    });
    return new ResponseEntity<>(validationErrors, HttpStatus.BAD_REQUEST);
  }

  @ExceptionHandler(ResourceNotFoundExp.class)
  public ResponseEntity<ErrorResponseDto> handleResourceNotFoundException(
    ResourceNotFoundExp ex,
    WebRequest webRequest
  ) {
    log.error("Resource not found: {}", ex.getMessage());
    ErrorResponseDto errorResponse = new ErrorResponseDto();
    errorResponse.setApiPath(webRequest.getDescription(false));
    errorResponse.setErrorCode(HttpStatus.NOT_FOUND);
    errorResponse.setErrorMessage(ex.getMessage());
    errorResponse.setErrorTime(LocalDateTime.now());
    return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
  }

  @ExceptionHandler(Exception.class)
  public ResponseEntity<ErrorResponseDto> handleGlobalException(
    Exception ex,
    WebRequest webRequest
  ) {
    log.error("Internal server error: {}", ex.getMessage());
    ErrorResponseDto errorResponse = new ErrorResponseDto();
    errorResponse.setApiPath(webRequest.getDescription(false));
    errorResponse.setErrorCode(HttpStatus.INTERNAL_SERVER_ERROR);
    errorResponse.setErrorMessage(ex.getMessage());
    errorResponse.setErrorTime(LocalDateTime.now());
    return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
