FROM openjdk:21-jdk-slim
LABEL "org.opencontainers.image.authors"="devcambo.com"
COPY target/usr-api-0.0.1-SNAPSHOT.jar usr-api-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java", "-jar", "usr-api-0.0.1-SNAPSHOT.jar"]