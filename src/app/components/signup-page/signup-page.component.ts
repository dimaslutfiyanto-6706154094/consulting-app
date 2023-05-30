import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent {

  public signUpForm!: FormGroup

  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.signUpForm = this.formbuilder.group({
      username: [''],
      email: [''],
      password: ['', Validators.required]
    })
  }

  signUp() {
    this.http.post<any>("http://localhost:3000/signupUsersList", this.signUpForm.value)
      .subscribe(res => {
        alert('Sign Up Succesful');
        this.signUpForm.reset()
        this.router.navigate(["login"])
      }, err => {
        alert("Something went wrong")
      })
  }
}
