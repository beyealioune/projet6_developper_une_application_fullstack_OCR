import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {

  articleForm!: FormGroup; // Déclarez un FormGroup pour le formulaire

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // Initialisez le formulaire dans le hook ngOnInit
    this.articleForm = this.formBuilder.group({
      theme: ['', Validators.required], // Champ thème avec validation requise
      title: ['', Validators.required], // Champ titre avec validation requise
      content: ['', Validators.required] // Champ contenu avec validation requise
    });
  }

  // Méthode pour soumettre le formulaire
  onSubmit() {
    if (this.articleForm.valid) {
      // Logique pour soumettre les données (envoyer à un service, etc.)
      console.log(this.articleForm.value);
      // Réinitialiser le formulaire après soumission
      this.articleForm.reset();
    } else {
      // Afficher des messages d'erreur ou d'alerte si le formulaire est invalide
      console.error('Le formulaire est invalide');
    }
  }
}