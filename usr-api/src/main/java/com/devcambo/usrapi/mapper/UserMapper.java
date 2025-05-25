package com.devcambo.usrapi.mapper;

import com.devcambo.usrapi.dto.UserDto;
import com.devcambo.usrapi.dto.UserRequestDto;
import com.devcambo.usrapi.entity.User;

public class UserMapper {

  public static UserDto toUserDto(User user) {
    if (user == null) {
      return null;
    }
    return new UserDto(
      user.getUserId(),
      user.getFirstName(),
      user.getLastName(),
      user.getEmail(),
      user.getCreatedAt()
    );
  }

  public static User toUser(UserRequestDto userRequestDto) {
    if (userRequestDto == null) {
      return null;
    }
    User user = new User();
    user.setFirstName(userRequestDto.firstName());
    user.setLastName(userRequestDto.lastName());
    user.setEmail(userRequestDto.email());
    return user;
  }
}
