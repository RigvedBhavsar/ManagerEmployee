import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {ConnetService} from '../connet.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    
    public submitted:boolean=false;
    constructor(public fobj:FormBuilder,
                public router : Router,
                private connect : ConnetService){}

  //Validation purpose  
  userform = this.fobj.group(
    {
        firstname:['',[Validators.required,Validators.pattern(('[a-zA-Z ]*'))]],
        lastname:['',[Validators.required,Validators.pattern(('[a-zA-Z ]*'))]],
        email:['',[Validators.required, Validators.pattern(("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"))]],
        dob :['',Validators.required],
        password:['',[Validators.required,Validators.minLength(6)]],
        company:['',Validators.required],
        address:['',Validators.required]
    }
    );

    //This method will send the data to the server through service -> http ->server 
    signup()
    {
        this .submitted=true;
        this.connect.signupManeger(this.userform.value)
        .subscribe
        (
            data => console.log("Success", data),
            error => console.error("!error", error)
        )
        alert("Successfully Registerd");
        this.router.navigate(['/login']);
    }
    ngOnInit(): void {}
}
