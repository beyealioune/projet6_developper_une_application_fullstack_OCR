import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { BoardComponent } from './pages/board/board.component';
import { RegisterComponent } from './pages/register/register.component';
import { ThemeComponent } from './pages/theme/theme.component';
import { ArticleComponent } from './pages/article/article.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { AuthGuard } from './guard/auth.guard';
import { ProfilComponent } from './pages/profil/profil.component';


const routes: Routes = [{ path: '', component: HomeComponent },
  { path : 'connexion', component: ConnexionComponent },
  { path : 'register', component: RegisterComponent },
  { path : 'board', component: BoardComponent ,canActivate: [AuthGuard] },
  { path : 'theme', component: ThemeComponent ,canActivate: [AuthGuard]},
  { path : 'article/:id', component: ArticleComponent,canActivate: [AuthGuard] },
  { path : 'article', component: BoardComponent,canActivate: [AuthGuard] },
  { path : 'create', component: CreateArticleComponent ,canActivate: [AuthGuard]},
  { path : 'board/create', component: CreateArticleComponent ,canActivate: [AuthGuard]},
  { path : 'profil', component: ProfilComponent ,canActivate: [AuthGuard]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
