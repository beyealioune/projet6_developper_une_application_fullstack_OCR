import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './register/register.component';
import { ConnexionComponent } from './connexion/connexion.component';


const routes: Routes = [{ path: '', component: HomeComponent },
  { path : 'connexion', component: ConnexionComponent },
  { path : 'register', component: RegisterComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
