package com.gayatriFoundation.GayatriFoundation.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.time.LocalDateTime;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class MessageController {

    private static final String FILE_NAME = "messages.log";

    @PostMapping("/response")

    public ResponseEntity<String> saveResponse(@RequestBody String message) {
        try {
            String messageWithTimestamp = LocalDateTime.now() + ": " + message + System.lineSeparator();
            Path filePath = Paths.get(FILE_NAME);
            Files.writeString(filePath, messageWithTimestamp, StandardOpenOption.CREATE, StandardOpenOption.APPEND);
            return ResponseEntity.ok("Message received and saved successfully.");
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error saving message: " + e.getMessage());
        }
    }
}
