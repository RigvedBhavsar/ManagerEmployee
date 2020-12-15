import { Injectable , Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { ConnetService } from './connet.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {


    constructor(private injector: Injector){}
    
    intercept(req, next) {
      let connectService = this.injector.get(ConnetService)
      let tokenizedReq = req.clone(
        {
          headers: req.headers.set('Authorization', 'bearer ' + connectService.getToken())
        }
      )
      return next.handle(tokenizedReq)
    }
}
