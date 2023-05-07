package com.coding.web.entities;

@Entity
@Table(name = "pdf_files")
@AllArgsConstructor
public class PdfFile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "file_name")
    private String fileName;
    @Column(name = "file_type")
    private String fileType;
    @Lob
    @Column(name = "file_data")
    private byte[] fileData;
}
