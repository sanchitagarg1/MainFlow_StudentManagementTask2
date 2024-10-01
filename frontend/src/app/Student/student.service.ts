import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseURL = 'http://localhost:8090/api/stu';

  constructor(private httpClient: HttpClient) {}

  getStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.baseURL);
  }

  createStudent(student: Student): Observable<Student> {
    return this.httpClient.post<Student>(this.baseURL, student);
  }

  getStudentById(id: number): Observable<Student> {
    return this.httpClient.get<Student>(`${this.baseURL}/${id}`);
  }

  updateStudent(id: number, student: Student): Observable<Student> {
    return this.httpClient.put<Student>(`${this.baseURL}/${id}`, student);
  }

  deleteStudent(id: number): Observable<Student> {
    return this.httpClient.delete<Student>(`${this.baseURL}/${id}`);
  }

  downloadStudentReport(studentId: number): Observable<Blob> {
    return this.httpClient.get(`${this.baseURL}/${studentId}/report`, { responseType: 'blob' });
  }

}