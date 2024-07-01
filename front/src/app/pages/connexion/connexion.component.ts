import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthSuccess } from 'src/app/models/authSuccess';
import { LoginRequest } from 'src/app/models/loginRequest';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  loginForm!: FormGroup;
  onError: boolean = false; 

  constructor(private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private sessionService: SessionService
  ) { }

  ngOnInit(): void {
    // Initialiser le formulaire de connexion
    this.initLoginForm();
  }

  initLoginForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]] 
    });
  }

  onSubmit(): void {
    const loginRequest = this.loginForm.value as LoginRequest;
    this.authService.login(loginRequest).subscribe(
      (response: AuthSuccess) => {
        console.log('Received token:', response.token); // Afficher le jeton dans la console
        localStorage.setItem('token', response.token);
        this.authService.me().subscribe((user: any) => {
          this.sessionService.logIn(user);
          this.router.navigate(['/board']);
        });
      },
      error => this.onError = true
    );
  }
}
