package com.khs.makeqr.service;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.EncodeHintType;
import com.google.zxing.client.j2se.MatrixToImageConfig;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;
import com.google.zxing.qrcode.decoder.ErrorCorrectionLevel;
import com.khs.makeqr.dto.QrRequest;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.util.HashMap;
import java.util.Map;

@Service
public class QrService {

    public byte[] generate(QrRequest request) throws Exception {
        String content = request.getUrl();
        int size = request.getSize();

        int foregroundColor = parseColor(request.getForegroundColor(), 0xFF000000);
        int backgroundColor = parseColor(request.getBackgroundColor(), 0xFFFFFFFF);

        Map<EncodeHintType, Object> hints = new HashMap<>();
        hints.put(EncodeHintType.ERROR_CORRECTION, ErrorCorrectionLevel.M);
        hints.put(EncodeHintType.CHARACTER_SET, "UTF-8");
        hints.put(EncodeHintType.MARGIN, 1);

        QRCodeWriter writer = new QRCodeWriter();
        BitMatrix matrix = writer.encode(content, BarcodeFormat.QR_CODE, size, size, hints);

        MatrixToImageConfig config = new MatrixToImageConfig(foregroundColor, backgroundColor);

        ByteArrayOutputStream out = new ByteArrayOutputStream();
        MatrixToImageWriter.writeToStream(matrix, "PNG", out, config);
        return out.toByteArray();
    }

    private int parseColor(String hex, int defaultColor) {
        if (hex == null || hex.isEmpty()) return defaultColor;
        String clean = hex.startsWith("#") ? hex.substring(1) : hex;
        try {
            if (clean.length() == 6) {
                return (int) (0xFF000000L | Long.parseLong(clean, 16));
            } else if (clean.length() == 8) {
                return (int) Long.parseLong(clean, 16);
            }
        } catch (NumberFormatException e) {
            return defaultColor;
        }
        return defaultColor;
    }
}