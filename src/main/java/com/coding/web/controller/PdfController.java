package com.coding.web.controller;

import com.coding.web.repositories.PdfFileRepository;

import java.awt.*;
import java.io.File;
import java.io.IOException;
import java.net.http.HttpHeaders;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequestMapping("/UD")
@AllArgsConstructor
public class PdfController {

    @Autowired
    private final PdfFileRepository pdfFileRepository;

    @PostMapping("/pdf/upload")
    public ResponseEntity<String> uploadPDF(@RequestParam("file") MultipartFile file) {
        String fileName = file.getOriginalFilename();
        try {
            file.transferTo(new File("File-Upload/" + fileName));
            return ResponseEntity.ok("File uploaded successfully");
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to upload file");
        }
    }

    @GetMapping("/pdf/download")
    public ResponseEntity<byte[]> downloadPDF(@RequestParam("fileName") String fileName) {
        Path path = Paths.get("File-Upload/" + fileName);
        byte[] pdfData = Files.readAllBytes(path);
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(PageAttributes.MediaType.APPLICATION_PDF);
        headers.setContentDisposition(ContentDisposition.builder("inline").filename(fileName).build());
        return ResponseEntity.ok().headers(headers).body(pdfData);
    }
}
