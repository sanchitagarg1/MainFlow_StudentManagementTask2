package com.example.demo.controller;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.Students;
import com.example.demo.repository.StudentRepo;
import com.example.demo.service.ReportService;
import com.itextpdf.text.BaseColor;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Element;
import com.itextpdf.text.Font;
import com.itextpdf.text.FontFactory;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.Phrase;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;

import jakarta.servlet.http.HttpServletResponse;



@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/stu")

public class StudentController {
    
    @Autowired
    private StudentRepo studentrepository;
    
    @Autowired
    private ReportService reportService;

    @GetMapping
    public List<Students> getAllStudents() {		
        return studentrepository.findAll();		
    }
    
    @PostMapping
    public Students addStudent(@RequestBody Students student) {
        return studentrepository.save(student);
    }
    
    @GetMapping("/{id}")
    public Optional<Students> getStudentById(@PathVariable long id) {
        return studentrepository.findById((int) id);
    }
    
    @PutMapping("/{id}")
    public Students updateStudent(@PathVariable long id, @RequestBody Students studentDetails) {
        Students student = studentrepository.findById((int) id).orElseThrow();
        
        student.setFirstName(studentDetails.getFirstName());
        student.setLastName(studentDetails.getLastName());
        student.setEmail(studentDetails.getEmail());
        student.setGrade(studentDetails.getGrade());
        student.setAttendance(studentDetails.getAttendance());
        
        return studentrepository.save(student);
    }
    
    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable long id) {
        studentrepository.deleteById((int) id);
    }
    
    
    
    @GetMapping("/{id}/report")
    public ResponseEntity<byte[]> downloadStudentReport(@PathVariable int id, HttpServletResponse response) throws DocumentException, IOException {
        Optional<Students> studentOpt = studentrepository.findById(id);

        if (studentOpt.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Students student = studentOpt.get();

        // Create a PDF document
        Document document = new Document();
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        PdfWriter.getInstance(document, baos);

        document.open();

        // Adding title with custom font and size
        Font titleFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 18, BaseColor.BLACK);
        Paragraph title = new Paragraph("Student Report", titleFont);
        title.setAlignment(Element.ALIGN_CENTER);
        title.setSpacingAfter(20);
        document.add(title);

        // Adding student details with improved styling
        Font sectionFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 12, BaseColor.BLACK);
        Font normalFont = FontFactory.getFont(FontFactory.HELVETICA, 12, BaseColor.BLACK);

        document.add(new Paragraph("Student Details:", sectionFont));
        document.add(new Paragraph("First Name: " + student.getFirstName(), normalFont));
        document.add(new Paragraph("Last Name: " + student.getLastName(), normalFont));
        document.add(new Paragraph("Email: " + student.getEmail(), normalFont));
        document.add(new Paragraph("Grade: " + student.getGrade(), normalFont));
        document.add(new Paragraph("Attendance: " + student.getAttendance(), normalFont));
        document.add(new Paragraph(" ")); // Add space between sections

        // Adding a table for grades or additional information (if applicable)
        PdfPTable table = new PdfPTable(2); // 2 columns
        table.setWidthPercentage(100);
        table.setSpacingBefore(10f);
        table.setSpacingAfter(10f);

        // Table Header
        Font tableHeaderFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 12, BaseColor.WHITE);
        PdfPCell header1 = new PdfPCell(new Phrase("Attribute", tableHeaderFont));
        header1.setBackgroundColor(BaseColor.GRAY);
        header1.setPadding(5);
        PdfPCell header2 = new PdfPCell(new Phrase("Value", tableHeaderFont));
        header2.setBackgroundColor(BaseColor.GRAY);
        header2.setPadding(5);
        table.addCell(header1);
        table.addCell(header2);

        // Adding table rows
        table.addCell("First Name");
        table.addCell(student.getFirstName());
        table.addCell("Last Name");
        table.addCell(student.getLastName());
        table.addCell("Email");
        table.addCell(student.getEmail());
        table.addCell("Grade");
        table.addCell(student.getGrade());
        table.addCell("Attendance");
        table.addCell(student.getAttendance());

        document.add(table); // Add the table to the document

        // Closing the document
        document.close();

        // Preparing the response
        HttpHeaders headers = new HttpHeaders();
        headers.set(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=student_report_" + id + ".pdf");
        
        return ResponseEntity.ok()
                .headers(headers)
                .contentType(org.springframework.http.MediaType.APPLICATION_PDF)
                .body(baos.toByteArray());
    }
    
}