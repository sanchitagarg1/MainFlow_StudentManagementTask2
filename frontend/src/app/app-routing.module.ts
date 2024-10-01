import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './Student/student/student.component';
import { AddStudentComponent } from './Student/add-student/add-student.component';
import { UpdateStudentComponent } from './Student/update-student/update-student.component';
import { ViewStudentDetailsComponent } from './Student/view-student-details/view-student-details.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {path:'students', component: StudentComponent},
  {path:'add-student', component: AddStudentComponent},
  {path:'update-student/:id', component: UpdateStudentComponent},
  {path:'view-student-details/:id', component: ViewStudentDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
