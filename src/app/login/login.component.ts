import { Component, OnInit } from '@angular/core';

// import classes which are required for reactive forms
import {FormBuilder,Validators} from '@angular/forms';
import{Router} from '@angular/router';
import { ConnetService } from '../connet.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 // Inject FormBuilder service
 constructor(public fbobj : FormBuilder,
                public router : Router,
                public connect : ConnetService){}

    LoginForm = this.fbobj.group(
    {
      email :['',Validators.required ],
      password : ['',Validators.required]
    }
  );

  ngOnInit(): void {}
  
  login()
  {
    this.connect.loginManeger(this.LoginForm.value)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        alert("Login Succefull");
        this.router.navigate(['/'])
      },
      err => console.log(err)
    ) 
  }
}
