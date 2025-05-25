package com.devcambo.usrapi.service.impl;

import com.devcambo.usrapi.dto.UserDto;
import com.devcambo.usrapi.dto.UserRequestDto;
import com.devcambo.usrapi.entity.User;
import com.devcambo.usrapi.exception.ResourceNotFoundExp;
import com.devcambo.usrapi.mapper.UserMapper;
import com.devcambo.usrapi.repository.UserRepository;
import com.devcambo.usrapi.service.UserService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

  private final UserRepository userRepository;

  @Override
  public List<UserDto> findAllUsers() {
    List<User> users = userRepository.findAll();
    return users.stream().map(UserMapper::toUserDto).toList();
  }

  @Override
  public UserDto findUserById(Long id) {
    User user = getUserById(id);
    return UserMapper.toUserDto(user);
  }

  @Override
  public UserDto createUser(UserRequestDto userRequestDto) {
    User user = UserMapper.toUser(userRequestDto);
    return UserMapper.toUserDto(userRepository.save(user));
  }

  @Override
  public UserDto updateUser(Long id, UserRequestDto userRequestDto) {
    User existingUser = getUserById(id);
    existingUser.setFirstName(userRequestDto.firstName());
    existingUser.setLastName(userRequestDto.lastName());
    existingUser.setEmail(userRequestDto.email());
    return UserMapper.toUserDto(userRepository.save(existingUser));
  }

  @Override
  public void deleteUser(Long id) {
    User user = getUserById(id);
    userRepository.deleteById(user.getUserId());
  }

  public User getUserById(Long id) {
    return userRepository
      .findById(id)
      .orElseThrow(() -> new ResourceNotFoundExp("User", "id", id.toString()));
  }
}
