import { Component } from '@angular/core';
import { DefaultLoginLayout } from '../../components/default-login-layout/default-login-layout';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInput } from '../../components/primary-input/primary-input';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/register-service';

@Component({
  selector: 'app-register',
  imports: [DefaultLoginLayout, ReactiveFormsModule, PrimaryInput],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  registerForm!: FormGroup;

  constructor(
    private router: Router,
    private registerService: RegisterService,
  ) {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  submit() {
    const { name, email, password } = this.registerForm.value;

    this.registerService.register(name, email, password).subscribe({
      next: () => console.log('sucesso'),
      error: () => console.log('error'),
    });
  }

  navigate() {
    this.router.navigate(['/login']);
  }
}
