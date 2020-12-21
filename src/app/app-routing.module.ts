import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Components
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WildcardComponent } from './wildcard/wildcard.component';

//For validation purpose
import { AuthGuard } from './auth.guard';
import { UpdateEmpComponent } from './employee/update-emp/update-emp.component';

const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path : 'updateEmp' , component:UpdateEmpComponent},
    {path:'emp', canActivate:[AuthGuard],component:HomeComponent},
    {path:'',redirectTo:'/emp', pathMatch:'full'},    
    {path:'**',component:WildcardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
