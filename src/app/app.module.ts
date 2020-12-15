import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Importing the component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmployeeComponent } from './employee/employee.component';
import { WildcardComponent } from './wildcard/wildcard.component';

//Importing the form modules
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

//Importing Animation Module and Material Module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';          
import {MatIconModule} from '@angular/material/icon';

//Importing Service and http for Server Comminication 
import {HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { ConnetService } from './connet.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    EmployeeComponent,
    WildcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [ConnetService , AuthGuard ,
    {
        provide : HTTP_INTERCEPTORS,
        useClass: TokenInterceptorService,
        multi: true
    }    
],
  bootstrap: [AppComponent]
})
export class AppModule { }
