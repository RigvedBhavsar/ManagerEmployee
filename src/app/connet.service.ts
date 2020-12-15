import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Employee} from './employee';
import {Manager} from './manager';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class ConnetService {

    private _loginUrl ="http://localhost:3000/api/loginManeger";
    private _signupUrl = " http://localhost:3000/api/signupManeger";
    private _getEmpUrl = "  http://localhost:3000/api/getEmp";
    private _UpdateEmpUrl = " ";
    private _addEmpUrl = "http://localhost:3000/api/addEmp";
    private _delEmpUrl = "http://localhost:3000/api/delete"
    
    constructor(private http : HttpClient,
                public router : Router){}

    loginManeger(manager)
    {
        return this.http.post<any>(this._loginUrl,manager)
    }

    signupManeger(manegerdet : Manager)
    {
        return this.http.post<Manager[]>(this._signupUrl,manegerdet);
    }

    getAllEmp()
    {
        return this.http.get<any>(this._getEmpUrl)
    }

    addEmployee(empdet : Employee)
    {
        return this.http.post<Employee[]>(this._addEmpUrl , empdet);
    }

    updateEmp()
    {
        
    }

    deleteEmp(id : string)
    {
        return this.http.delete(`${this._delEmpUrl}/${id}`);
    }


    logoutUser() {
        localStorage.removeItem('token')
        this.router.navigate(['/'])
      }
    
      getToken() {
        return localStorage.getItem('token')
      }
    
      loggedIn() {
        return !!localStorage.getItem('token')    
      }

}
