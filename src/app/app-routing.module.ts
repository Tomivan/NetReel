import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { OptionsComponent } from './options/options.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'landing-page', component: LandingPageComponent },
  {path: 'login', component: LoginComponent},
  {path: 'options', component: OptionsComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'landing-page', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
