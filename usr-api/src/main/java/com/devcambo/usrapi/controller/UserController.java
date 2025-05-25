package com.devcambo.usrapi.controller;

import com.devcambo.usrapi.dto.UserDto;
import com.devcambo.usrapi.dto.UserRequestDto;
import com.devcambo.usrapi.service.UserService;
import jakarta.validation.Valid;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
@Slf4j
public class UserController {

  private final UserService userService;

  // TODO: implement pagination and sorting
  @GetMapping
  public ResponseEntity<List<UserDto>> findAll() {
    log.info("Fetching all users");
    return ResponseEntity.ok(userService.findAllUsers());
  }

  @GetMapping("/{id}")
  public ResponseEntity<UserDto> findById(@PathVariable Long id) {
    log.info("Fetching user with id: {}", id);
    return ResponseEntity.ok(userService.findUserById(id));
  }

  @PostMapping
  public ResponseEntity<UserDto> create(
    @Valid @RequestBody UserRequestDto userRequestDto
  ) {
    log.info("Creating new user: {}", userRequestDto);
    return ResponseEntity
      .status(HttpStatus.CREATED)
      .body(userService.createUser(userRequestDto));
  }

  @PutMapping("/{id}")
  public ResponseEntity<UserDto> update(
    @PathVariable Long id,
    @Valid @RequestBody UserRequestDto userRequestDto
  ) {
    log.info("Updating user with id: {}", id);
    return ResponseEntity.ok(userService.updateUser(id, userRequestDto));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> delete(@PathVariable Long id) {
    log.info("Deleting user with id: {}", id);
    userService.deleteUser(id);
    return ResponseEntity.noContent().build();
  }
}
