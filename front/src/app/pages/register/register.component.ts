import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  registerForm!: FormGroup; // Déclaration du formulaire
  
  constructor(private fb: FormBuilder, private authService: AuthService) { }
  
  ngOnInit(): void {
    this.initForm(); // Initialisation du formulaire lors de l'initialisation du composant
  }
  
  initForm(): void {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).*$/)
      ]]
    });
  }
  
  submit(): void {
    if (this.registerForm.valid) {
      // Appeler le service d'authentification pour l'inscription
      this.authService.register(this.registerForm.value).subscribe(
        (response) => {
          console.log('Inscription réussie !');
          // Redirection ou traitement supplémentaire après inscription réussie
        },
        (error) => {
          console.error('Erreur lors de l\'inscription :', error);
          // Gestion des erreurs d'inscription
        }
      );
    } else {
      console.log('Le formulaire n\'est pas valide.');
    }
  }
  
  // Fonction utilitaire pour accéder facilement aux contrôles de formulaire
  get formControls() {
    return this.registerForm.controls;
  }
}
