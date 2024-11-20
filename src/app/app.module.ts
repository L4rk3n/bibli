import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuteursComponent } from './components/auteurs/auteurs.component';
import { LivresComponent } from './components/livres/livres.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { provideHttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddBookComponent } from './components/livres/components/add-book/add-book.component';
import { FormsModule } from '@angular/forms';
import { AddAuthorComponent } from './components/auteurs/components/add-author/add-author/add-author.component';
import { AdressesComponent } from './components/adresses/adresses.component';
import { AddAdressesComponent } from './components/adresses/components/add-adresses/add-adresses.component';
import { AddUserComponent } from './components/utilisateurs/components/add-user/add-user.component';
import { UtilisateursComponent } from './components/utilisateurs/utilisateurs.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [provideHttpClient(),{provide:HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
