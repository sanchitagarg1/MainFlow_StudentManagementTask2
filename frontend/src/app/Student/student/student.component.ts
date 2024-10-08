import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service'; 
import { Router } from '@angular/router';
import { Student } from '../student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: Student[];

  constructor(
    private studentService: StudentService, 
    private router: Router    
  ) {}

  ngOnInit(): void {
    this.getStudents();
  }

  // Get the list of students
  getStudents() {
    this.studentService.getStudents().subscribe(
      (data: Student[]) => {
        this.students = data;
      },
      (error) => {
        console.error('Error fetching students:', error);
        if (error.status === 400) {
          
          alert('Validation Error: ' + JSON.stringify(error.error));
        }
      }
    );
  }
  

  // Navigate to update the selected student
  updateStudent(id: number) {
    this.router.navigate(['update-student', id]); 
  }

  // Delete the selected student
  deleteStudent(id: number) {
    this.studentService.deleteStudent(id).subscribe(data => {
      console.log("Deleted Successfully" + data);
      this.getStudents(); 
    });
  }

  // View the selected student's details
  viewStudentDetails(id: number) {
    this.router.navigate(['view-student-details', id]); 
  }


  downloadReport(studentId: number) {
    this.studentService.downloadStudentReport(studentId).subscribe((blob: Blob) => {
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = `student_report_${studentId}.pdf`;
      link.click();
    });
  }
}
