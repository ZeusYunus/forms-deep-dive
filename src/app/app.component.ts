import { Component } from '@angular/core';

import { LoginReactiveFormsComponent } from "./auth/login-reactive-forms/login-reactive-forms.component";
import { SignupComponent } from "./auth/signup/signup.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [SignupComponent],
})
export class AppComponent {}
