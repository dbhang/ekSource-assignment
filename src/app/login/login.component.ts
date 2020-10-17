import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('authForm', { static: true }) signUpForm: NgForm;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.signUpForm);
    this.signUpForm.reset();
  }

}
