import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WildcardComponent } from './wildcard/wildcard.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'emp', canActivate:[AuthGuard],component:HomeComponent},
    {path:'',redirectTo:'/emp', pathMatch:'full'},
    {path:'**',component:WildcardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
