import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private router: Router) {}

  // Dummy signup function
  signUp() {
    // Perform signup logic here (e.g., call an API)
    console.log('User signed up!');

    // Navigate to the login page after signup
    this.router.navigate(['/login']);
  }
}
