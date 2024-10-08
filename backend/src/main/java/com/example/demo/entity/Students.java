package com.example.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "studenttask2")
public class Students {
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotNull(message = "Firstname cannot be null")
    @Column(name = "first_name")
    private String firstName;

    @NotNull(message = "Lastname cannot be null")
    @Column(name = "last_name")
    private String lastName;

    @NotNull(message = "Email cannot be null")
    @Email(message = "Email should be valid")
    @Column(name = "email")
    private String email;

    @Column(name = "grade")
    private String grade;

    @Column(name = "attendance")
    private String attendance;
	
	
	public Students() {
		
	}
		


	public Students(String firstName, String lastName, String email, String grade, String attendance) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.grade = grade;
		this.attendance = attendance;
	}





	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getFirstName() {
		return firstName;
	}


	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}


	public String getLastName() {
		return lastName;
	}


	public void setLastName(String lastName) {
		this.lastName = lastName;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getGrade() {
		return grade;
	}


	public void setGrade(String grade) {
		this.grade = grade;
	}


	public String getAttendance() {
		return attendance;
	}


	public void setAttendance(String attendance) {
		this.attendance = attendance;
	}
	
	
	

}