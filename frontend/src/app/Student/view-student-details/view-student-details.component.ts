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
    // Getting the 'id' from the route parameters
    this.id = this.route.snapshot.params['id'];

    // Fetching the student details by ID
    this.studentService.getStudentById(this.id).subscribe(data => {
      this.student = data;
    });
  }
}
