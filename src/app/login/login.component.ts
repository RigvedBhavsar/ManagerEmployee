import { Component, OnInit } from '@angular/core';

// import classes which are required for reactive forms
import {FormBuilder,FormGroup,Validators, FormControl, MinLengthValidator} from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 // Inject FormBuilder service
 constructor(public fbobj : FormBuilder)
 {
 }

 LoginForm = this.fbobj.group(
    {
      // Add Multiple validations
      username :['', [Validators.required, Validators.minLength(5)] ],
      passowrd : ['',Validators.required]
    }
  );

  ngOnInit(): void {
  }

}
