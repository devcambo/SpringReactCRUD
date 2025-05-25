package com.devcambo.usrapi.service;

import com.devcambo.usrapi.dto.UserDto;
import com.devcambo.usrapi.dto.UserRequestDto;
import java.util.List;

public interface UserService {
  List<UserDto> findAllUsers();
  UserDto findUserById(Long id);
  UserDto createUser(UserRequestDto userRequestDto);
  UserDto updateUser(Long id, UserRequestDto userRequestDto);
  void deleteUser(Long id);
}
