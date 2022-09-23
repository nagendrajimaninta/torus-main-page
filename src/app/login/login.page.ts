import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,FormBuilder , Validators} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // errors = [
  //   {type:'required',message : 'filed can not be empty'},
  //   {type:'maxLength',message : 'filed can not have more than 5 characters'}
  // ]

  /* validationUserMessage = {
    email:[
      {type:"required", message:"Please enter your Email"},
      {type:"pattern", message:"The Email entered is Incorrect.Try again"}
    ],
    password:[
      {type:"required", message:"please Enter your Password!"},
      {type:"minlength", message:"The Password must be at least 5 characters or more"}

    ]
  } */
  loginForm:any = FormGroup;
  email: string = "";
  password: string = "";
  constructor(private router : Router , private fb:FormBuilder) { }

  ngOnInit() {
    var key = JSON.parse(localStorage.getItem('key') || '[]');
    this.loginForm = this.fb.group({
      // email : new FormControl('',[Validators.required ,Validators.maxLength(5)])
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@heytorus.com')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15)
      ]))
    });
  }
  /* ngOnChanges(){
    console.log(this.email.length)
    console.log(this.password.length)
  } */
  /* expression(){
    var a = confirm("Testing");
    if(a==true){
       window.open();
    }else{
      alert("YOU ARE NOT ABLE TO LOGIN TO THIS SITE")
    }

  } */
  loginSubmit(data:any){
    

  }
 

  onSubmit() {
    
    
   // for storing the va;ues in local storage
   var key = JSON.parse(localStorage.getItem('key') || '[]');
   /* console.log(key); */

   key.forEach((user, index)=> {
    console.log(user.Email);
    console.log(this.loginForm.value.email);
    if(this.loginForm.value.email === user.Email && this.loginForm.value.password === user.Password){
      alert("Success"); 
      this.router.navigate(['./products']);
    }else{
      alert("In-correct email and password");
    }
    /* console.log("[" + index + "]: " + user.Name); */
});
   
   /* localStorage.setItem('email',JSON.stringify(this.loginForm.value.email));
   localStorage.setItem('password',JSON.stringify(this.loginForm.value.password)); */
   /* let a:any = JSON.parse(window.localStorage.getItem('email'));
   let b:any = JSON.parse(window.localStorage.getItem('password')); */
   
   /* if(this.loginForm.value.email ===key[0].Email && this.loginForm.value.password===key[0].Password){
   alert("Able to access the website");
   this.router.navigate(['./forgot-password'])
   }else{
    alert("Please check the Mail and password")
   } */
   /* console.log(a);
   console.log(b); */
    /* debugger; */
    /* if(this.loginForm.valid === false){
      return;
    } */

    /* console.log(this.loginForm.valid); */
 }

}



