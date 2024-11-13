import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivresComponent } from './components/livres/livres.component';
import { AdressesComponent } from './components/adresses/adresses.component';
import { UtilisateursComponent } from './components/utilisateurs/utilisateurs.component';


const routes: Routes = [
  { path: 'auteurs', loadChildren: () => import("./components/auteurs/author.module").then(m => m.AuthorModule)},
  { path: 'livres', loadChildren: () => import('./components/livres/book.module').then(m => m.BookModule) },
  { path: 'adresses', loadChildren: () => import('./components/adresses/adresses.module').then(m => m.AdressesModule) },
  { path: 'utilisateurs', loadChildren: () => import('./components/utilisateurs/utilisateurs.module').then(m => m.UtilisateursModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
