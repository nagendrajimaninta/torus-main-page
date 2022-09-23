import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
@Component({

  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  loginForm: FormGroup;
  name :string="";
  email: string = "";
  password: string = "";
  password1: string = "";
   namesArr = [];
  constructor(private router : Router) { }
  valArr: any[] ;
  ngOnInit() {
    this.loginForm = new FormGroup({
     name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z][a-zA-Z ]+')
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@heytorus.com')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15)
      ])),
      password1: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15)
      ]))
    });

  }
  onSubmit() {
    
    if(this.loginForm.value.password ===this.loginForm.value.password1){
      alert("Registered Successfully");
      var key = JSON.parse(localStorage.getItem('key') || '[]');
      var course = {
      Name: this.loginForm.value.name,
      Email: this.loginForm.value.email,
      Password:this.loginForm.value.password,
    };
    key.push(course);
    console.log(key,"hey");
    localStorage.setItem('key', JSON.stringify(key));
    this.router.navigate(['./login']);
     
    }else{
      alert("Please check the password and confirm password")
    }

  }

}
