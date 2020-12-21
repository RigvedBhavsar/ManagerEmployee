import { Component, OnInit , Input } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router , ActivatedRoute } from '@angular/router';
import {ConnetService} from '../../connet.service';
import {Employee} from '../../employee';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent implements OnInit {

   
    Employees  = new Employee ('','','',0,0,'','','');
    
    constructor(public fobj:FormBuilder,
                public router:Router,
                public activatedrouter : ActivatedRoute,
                public connect : ConnetService,){ }

    updateEmp(id : string)
    {
        this.connect.updateEmp( id ,this.Employees)
        .subscribe(
            res=>{
                alert("Employee Updated");
                this.router.navigate(['/']);
            },
            err=>{
                console.log(err),
                alert("Unable to Update Employee")
            }
        );
    }
    ngOnInit(): void { 
        var id=this.activatedrouter.snapshot.paramMap.get("_id");
        this.connect.getOneEmp(id)
        .subscribe(
          res => {
            this.Employees = res
          },
          err => {
            alert("No Response");
          }
        )
   }
}
