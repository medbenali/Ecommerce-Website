FROM openjdk:11-jdk-slim

WORKDIR /backend

COPY backend/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]



