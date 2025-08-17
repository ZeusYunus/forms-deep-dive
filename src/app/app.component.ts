import { Component } from '@angular/core';

import { LoginReactiveFormsComponent } from "./auth/login-reactive-forms/login-reactive-forms.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [LoginReactiveFormsComponent],
})
export class AppComponent {}
