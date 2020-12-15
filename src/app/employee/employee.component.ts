import { Component, OnInit } from '@angular/core';
//Service for creating forms
import {FormBuilder, Validators} from '@angular/forms';
//service for navigating user
import {Router} from '@angular/router';
//service for displaying http errors
import { HttpErrorResponse } from '@angular/common/http';
//service for communicating to the server
import {ConnetService} from '../connet.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
    //we create and object of services
  constructor(
    public fobj:FormBuilder,
    public router:Router,
    public connect : ConnetService){ }
    
    isAddEmp = false;
    isUpdateEmp = false;
    isTabel = true;
    //Array for collecting Asynchronous data
    Products  = [];
    
    //building the forms using form builder
    addempform = this.fobj.group({
        //here we added validation for input field
    
        firstname:['',[Validators.required,Validators.pattern(('[a-zA-Z ]*'))]],
        lastname:['',[Validators.required,Validators.pattern(('[a-zA-Z ]*'))]],
        email:['',[Validators.required, Validators.pattern(("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"))]],
        company:['',Validators.required],
        address:['',Validators.required],
        mobile:['',[Validators.required,Validators.pattern('[0-9]{10}')]],
        dob :['',Validators.required],
        city:['',Validators.required]
    });
    
    //This method gets called when maneger is adding the employee to database
    addEmp()
    {
        //Here we are calling method from service which will help us to comminicate 
        //with the server
        //we are passing the values which are collected by formbuilder.
        //after succesfully added data to the database we are redirecting user to 
        //the home component. 
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

    //This method gets called when maneger wants to update the employee record.
    updateEmp(id : string)
    {
        //Here we are  accepting one parameter which is object id ,
        //and after that we are calling method from service which will update the record.
        //we are passing id and new object to the method.
        //after succesfully updated data to the database we are redirecting user to 
        //the home component. 
    
        this.isUpdateEmp = ! this.isUpdateEmp;
        this.isTabel = ! this.isTabel;

        this.connect.updateEmp( id ,this.addempform.value)
        .subscribe(
            res=>{
                console.log(res);
                //this.router.navigate(['/']);
                alert("Employee Updated");
                this.router.navigate(['/']);
                this.isUpdateEmp = ! this.isUpdateEmp;
                this.isTabel = ! this.isTabel;
            },
            err=>console.log(err));
    }
    //This is methos is used to delete data from the database
    deleteEmp(id:string)
    {
        //Here we are passing id to the function.
        //using that id we are deleting the data from database.
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
    //This is method is used to toggle forms and and table
    addEmpHandler()
    {
        this.isAddEmp = !this.isAddEmp;
        this.isTabel = ! this.isTabel;
    }

    // updateEmpHandler(id)
    // {
    //     this.isUpdateEmp = ! this.isUpdateEmp;
    //     this.isTabel = ! this.isTabel;
    // }
    

    //Through this lifecycle method we are accessing all the eployee details from databse.
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
