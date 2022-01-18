

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './angular-material/material.module';
// import { routing } from './app.routing';
import { AppRoutingModule } from './app.routing.module'; 

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AlunosGuard } from './guards/alunos.guard';

// import { CursosModule } from './cursos/cursos.module';
// import { AlunosModule } from './alunos/alunos.module';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    // routing
    // CursosModule,
    // AlunosModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
     AuthGuard,
     CursosGuard,
     AlunosGuard
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
