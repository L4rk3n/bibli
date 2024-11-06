import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuteursComponent } from './components/auteurs/auteurs.component';
import { LivresComponent } from './components/livres/livres.component';


const routes: Routes = [
  { path: 'auteurs', component: AuteursComponent },
  { path: 'livres', component: LivresComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
