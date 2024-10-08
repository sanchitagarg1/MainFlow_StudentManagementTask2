import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';  
import { StudentService } from '../student.service';  
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-student-details',
  templateUrl: './view-student-details.component.html',
  styleUrls: ['./view-student-details.component.css']
})
export class ViewStudentDetailsComponent implements OnInit {

  id: number;
  student: Student = new Student();

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.studentService.getStudentById(this.id).subscribe(
      data => {
        this.student = data;
      },
      error => {
        console.error('Error fetching student details:', error);
        if (error.status === 400) {
          alert('Validation Error: ' + JSON.stringify(error.error));
        }
      }
    );
  }

  
}
