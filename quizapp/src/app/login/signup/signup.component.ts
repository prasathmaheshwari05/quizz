import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  formdata={name:"",email:"",password:"",confirmpassword:""};
  submit=false
  constructor(private router: Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onSubmit(){
    console.log(this.formdata);

  }

  // Dummy signup function
  signUp() {
    // Perform signup logic here (e.g., call an API)
    console.log('User signed up!');

    // Navigate to the login page after signup
    this.router.navigate(['/login']);
  }
}

