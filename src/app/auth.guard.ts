import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ConnetService } from './connet.service';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    //Creating an instance of the service
    constructor(private _conneet: ConnetService,
                private _router: Router){ }
        
        // Guards return either true if the user can access a router or false if they donts.
        // CanActivate checks is user can visit the component or not.
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
