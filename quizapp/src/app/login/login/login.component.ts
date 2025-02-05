import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) {}

  // Dummy login function
  login() {
    // Perform login logic here (e.g., call an API)
    console.log('User logged in!');

    // Navigate to the admin login page after login
    this.router.navigate(['/dashboard']);
  }
}