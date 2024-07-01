import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { BoardComponent } from './pages/board/board.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { RegisterComponent } from './pages/register/register.component';
import { NavbarBurgerComponent } from './pages/navbar-burger/navbar-burger.component';
import { ThemeComponent } from './pages/theme/theme.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { AuthInterceptor } from './interceptor/jwt.interceptor';
import { ArticleComponent } from './pages/article/article.component';
import { ProfilComponent } from './pages/profil/profil.component';


@NgModule({
  declarations: [AppComponent, HomeComponent, ConnexionComponent, RegisterComponent, BoardComponent, NavbarComponent, NavbarBurgerComponent, ThemeComponent, ArticleComponent, CreateArticleComponent, ProfilComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
