import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultingPatientComponent } from './components/consulting-patient/consulting-patient.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';

const routes: Routes = [
  { path: "", redirectTo: "landing-page", pathMatch: "full" },
  { path: "landing-page", component: LandingPageComponent },
  { path: "consulting-patient", component: ConsultingPatientComponent },
  { path: "login", component: LoginPageComponent },
  { path: "sign-up", component: SignupPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
