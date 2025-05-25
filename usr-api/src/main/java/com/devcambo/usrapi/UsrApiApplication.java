package com.devcambo.usrapi;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing(auditorAwareRef = "auditAwareImpl")
@OpenAPIDefinition(
  info = @Info(
    title = "User REST API Documentation",
    description = "DevCambo User REST API Documentation",
    version = "v1"
  )
)
public class UsrApiApplication {

  public static void main(String[] args) {
    SpringApplication.run(UsrApiApplication.class, args);
  }
}
