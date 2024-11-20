import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';



const routes: Routes = [
  { path: 'auteurs', loadChildren: () => import("./components/auteurs/author.module").then(m => m.AuthorModule),canActivate:[AuthGuard] },
  { path: 'livres', loadChildren: () => import('./components/livres/book.module').then(m => m.BookModule),canActivate:[AuthGuard]  },
  { path: 'adresses', loadChildren: () => import('./components/adresses/adresses.module').then(m => m.AdressesModule),canActivate:[AuthGuard]  },
  { path: 'utilisateurs', loadChildren: () => import('./components/utilisateurs/utilisateurs.module').then(m => m.UtilisateursModule),canActivate:[AuthGuard]  },
  { path: 'login',component : LoginComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
