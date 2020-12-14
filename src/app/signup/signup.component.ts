import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    public fobj:FormBuilder
  ) { }

  //Validation purpose  
  userform = this.fobj.group(
    {
        fname:['',[Validators.required,Validators.pattern(('[a-zA-Z ]*'))]],
        sname:['',[Validators.required,Validators.pattern(('[a-zA-Z ]*'))]],
        email:['',[Validators.required, Validators.pattern(("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"))]],
        company:['',Validators.required],
        address:['',Validators.required],
        password:['',[Validators.required,Validators.minLength(6)]],
        dob :['',Validators.required]
    }
    );

    //This method will send the data to the server through service -> http ->server 
    signup()
    {}
    ngOnInit(): void {}

}
