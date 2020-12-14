import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(
    public fobj:FormBuilder,
    public router:Router
    ){ }
  isAddEmp = false;
  isUpdateEmp = false;
  //isDeleteEmp = false;
  isTabel = true;

  Products  = [
    {
        id : 123,
        firstname :"rigved",
        lastname : "bhavsar",
        address : "shivaji nagar",
        dob : "02/04/1999",
        mobile : 8554029391,
        city :"pune"
    },
    {
        id : 124,
        firstname :"pratik",
        lastname : "sutar",
        address : "wadgao",
        dob : "19/03/1997",
        mobile : 8554029391,
        city :"nagar"
    },
    {
        id : 125,
        firstname :"kshitija",
        lastname : "kalekar",
        address : "shivaji nagar",
        dob : "21/05/1999",
        mobile : 9767797530,
        city :"nashik"
    },
  ];

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
  

  addempform = this.fobj.group(
    {
        fname:['',[Validators.required,Validators.pattern(('[a-zA-Z ]*'))]],
        sname:['',[Validators.required,Validators.pattern(('[a-zA-Z ]*'))]],
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
        alert("Employee Added");
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

    deleteEmp()
    {
        alert("Do you Realy want to Delete Emp");
        this.router.navigate(['/']);
    }
  ngOnInit(): void {
  }

}
