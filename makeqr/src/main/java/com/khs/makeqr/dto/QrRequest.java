package com.khs.makeqr.dto;

import lombok.Data;

@Data
public class QrRequest {
    private String url;
    private int size; // 80, 120, 160, 200, 240, 300
}