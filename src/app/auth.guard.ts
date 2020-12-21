import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { ConnetService } from './connet.service';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    //Creating an instance of the service
    constructor(private _conneet: ConnetService,
                private _router: Router){ }
        
        canActivate(): boolean {
        if (this._conneet.loggedIn()) {
            console.log('true')
            return true
        } 
        else {
            console.log('false')            
            this._router.navigate(['/login'])
            return false
        }
        }
}
