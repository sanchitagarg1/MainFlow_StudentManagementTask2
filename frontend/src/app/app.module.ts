import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddStudentComponent } from './Student/add-student/add-student.component';
import { StudentComponent } from './Student/student/student.component';
import { UpdateStudentComponent } from './Student/update-student/update-student.component';
import { ViewStudentDetailsComponent } from './Student/view-student-details/view-student-details.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    StudentComponent,
    UpdateStudentComponent,
    ViewStudentDetailsComponent,
    RegisterComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
