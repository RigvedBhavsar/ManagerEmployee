import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import {ConnetService} from '../connet.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(
    public fobj:FormBuilder,
    public router:Router,
    public connect : ConnetService
    ){ }
    isAddEmp = false;
    isUpdateEmp = false;
    isTabel = true;

  Products  = [ ];

  

    addempform = this.fobj.group(
    {
        firstname:['',[Validators.required,Validators.pattern(('[a-zA-Z ]*'))]],
        lastname:['',[Validators.required,Validators.pattern(('[a-zA-Z ]*'))]],
        email:['',[Validators.required, Validators.pattern(("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"))]],
        company:['',Validators.required],
        address:['',Validators.required],
        mobile:['',[Validators.required,Validators.pattern('[0-9]{10}')]],
        dob :['',Validators.required],
        city:['',Validators.required]
    }
    );

    addEmp()
    {

        this.connect.addEmployee(this.addempform.value)
        .subscribe
        (
            data => console.log("Success", data),
            error => console.error("!error", error)
        )
        alert("Employee Added Succesfully !");
        
        this.router.navigate(['/']);
        this.isAddEmp = !this.isAddEmp;
        this.isTabel = ! this.isTabel;
    }

    updateEmp()
    {
        alert("Employee Updated");
        this.router.navigate(['/']);
        this.isUpdateEmp = ! this.isUpdateEmp;
        this.isTabel = ! this.isTabel;
    }

    deleteEmp(id:string)
    {
        this.connect.deleteEmp(id)
        .subscribe(
            res=>{
                console.log(res);
                this.router.navigate(['/']);
            },
            err=>{
                console.log(err);
            }
        )
        alert("Employee Deleted!");
        this.router.navigate(['/emp']);
    }
    addEmpHandler()
    {
        this.isAddEmp = !this.isAddEmp;
        this.isTabel = ! this.isTabel;
    }
    updateEmpHandler()
    {
        this.isUpdateEmp = ! this.isUpdateEmp;
        this.isTabel = ! this.isTabel;
    }
    
    ngOnInit(): void {
        this.connect.getAllEmp()
        .subscribe(
          res => this.Products = res,
          err => {
            if( err instanceof HttpErrorResponse ) {
              if (err.status === 401) {
                this.router.navigate(['/login'])
              }
            }
          }
        )
    }
}
