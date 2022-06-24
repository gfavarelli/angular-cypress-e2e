import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-cypress-e2e';

  public loginInvalido = false;

  loginForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required]]
  });
  
  constructor(
    private formBuilder: FormBuilder
  ) {

  }

  login() {
    this.loginInvalido = !this.loginForm.valid;
    if(this.loginForm.valid) {
      alert('Login Valido')
      return;
    }
    
  }
}
