package com.khs.makeqr.dto;

import lombok.Data;

@Data
public class QrRequest {
    private String url;
    private int size;
    private String foregroundColor; // 예: "#000000"
    private String backgroundColor; // 예: "#FFFFFF"
}