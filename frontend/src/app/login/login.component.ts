
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = new User(); 

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.user).subscribe(
      response => {
        if (response) {
          console.log('Login successful!', response);
          // Navigate to the dashboard or home
          this.router.navigate(['/students']); 
        } else {
          console.error('Invalid credentials');
        }
      },
      error => {
        console.error('Error during login', error);
      }
    );
  }
}