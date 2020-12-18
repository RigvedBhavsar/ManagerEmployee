import { Component, OnInit , Input } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router } from '@angular/router';
import {ConnetService} from '../../connet.service';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent implements OnInit {

   // @Input() empId : string;
   public empId : string ;

    constructor(public fobj:FormBuilder,
                public router:Router,
                public connect : ConnetService){ }

    addempform = this.fobj.group({
        firstname:['',[Validators.required,Validators.pattern(('[a-zA-Z ]*'))]],
        lastname:['',[Validators.required,Validators.pattern(('[a-zA-Z ]*'))]],
        email:['',[Validators.required, Validators.pattern(("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"))]],
        company:['',Validators.required],
        address:['',Validators.required],
        mobile:['',[Validators.required,Validators.pattern('[0-9]{10}')]],
        dob :['',Validators.required],
        city:['',Validators.required]
    });

    updateEmp(id : string)
    {

        this.connect.updateEmp( id ,this.addempform.value)
        .subscribe(
            res=>{
                console.log(res);
                alert("Employee Updated");
                //this.router.navigate(['/']);
            },
            err=>console.log(err));
    }
  ngOnInit(): void {  }
}
