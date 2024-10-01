import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent  implements OnInit {

  student : Student = new Student();

  constructor(
    private studentService : StudentService,
    private router : Router
    ){}

  ngOnInit(): void {
      
  }

  saveStudent(){
    this.studentService.createStudent(this.student).subscribe( ( data)=>{
      console.log(data);
      this.goToStudentList();
    });

  }


  goToStudentList(){
    this.router.navigate(['/students']);
  }

  onSubmit(){
    
    this.saveStudent();

  }
}
