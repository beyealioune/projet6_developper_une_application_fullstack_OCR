import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { BoardComponent } from './pages/board/board.component';
import { RegisterComponent } from './pages/register/register.component';
import { ThemeComponent } from './pages/theme/theme.component';
import { ArticleComponent } from './pages/article/article.component';
import { CreateArticleComponent } from './create-article/create-article.component';


const routes: Routes = [{ path: '', component: HomeComponent },
  { path : 'connexion', component: ConnexionComponent },
  { path : 'register', component: RegisterComponent },
  { path : 'board', component: BoardComponent },
  { path : 'theme', component: ThemeComponent },
  { path : 'article', component: ArticleComponent },
  { path : 'create', component: CreateArticleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
