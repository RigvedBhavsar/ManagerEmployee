import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Employee} from './employee';
import {Manager} from './manager';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class ConnetService {
    
    //Url for conneting api of the server

    private _loginUrl ="http://localhost:3000/api/loginManeger";
    private _signupUrl = " http://localhost:3000/api/signupManeger";
    private _getEmpUrl = "  http://localhost:3000/api/getEmp";
    private _addEmpUrl = "http://localhost:3000/api/addEmp";
    private _UpdateEmpUrl = "http://localhost:3000/api/updateEmp";
    private _delEmpUrl = "http://localhost:3000/api/deleteEmp"
    
    //Creating object
    constructor(private http : HttpClient,
                public router : Router){}

    //For log in maneger   
    loginManeger(manager)
    {
        return this.http.post<any>(this._loginUrl,manager)
    }

    //for Sign up maneger
    signupManeger(manegerdet : Manager)
    {
        return this.http.post<Manager[]>(this._signupUrl,manegerdet);
    }

    //For getting all the employee
    getAllEmp()
    {
        return this.http.get<any>(this._getEmpUrl)
    }

    //For adding employee
    addEmployee(empdet : Employee)
    {
        return this.http.post<Employee[]>(this._addEmpUrl , empdet);
    }

    //For updating employee
    updateEmp(id : string , newempdet : Employee)
    {
        return this.http.put<Employee>(`${this._UpdateEmpUrl}/${id}`, newempdet );
    }

    //for deleting employee
    deleteEmp(id : string)
    {
        return this.http.delete(`${this._delEmpUrl}/${id}`);
    }

    //for logging out user
    logoutUser()
    {
        localStorage.removeItem('token')
        this.router.navigate(['/'])
    }
    
    //For getting token from local machine
    getToken()
    {
        return localStorage.getItem('token')
    }
    

    loggedIn()
    {
        return !!localStorage.getItem('token')    
    }

}
