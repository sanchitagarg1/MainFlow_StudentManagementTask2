import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  student: Student = new Student();
  id: number;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.studentService.getStudentById(this.id).subscribe( data => {
      this.student = data;
    });
  }

  goToStudentList(){
    this.router.navigate(['/students']);
  }

  onSubmit(){
    this.studentService.updateStudent(this.id, this.student).subscribe(data => {
      console.log("Updated student data: " + data);
      this.goToStudentList();
    });
  }
}
