package com.khs.makeqr.controller;

import com.khs.makeqr.dto.QrRequest;
import com.khs.makeqr.service.QrService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/qr")
@RequiredArgsConstructor
public class QrController {

    private final QrService qrService;

    @PostMapping("/generate")
    public ResponseEntity<byte[]> generate(@RequestBody QrRequest req) {
        try {
            byte[] image = qrService.generate(req);
            return ResponseEntity.ok()
                    .contentType(MediaType.IMAGE_PNG)
                    .body(image);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }
}