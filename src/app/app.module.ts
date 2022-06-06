import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EstudiantesFormComponent } from './estudiantes-form/estudiantes-form.component';
import {EstudiantesListComponent } from './estudiantes/estudiantes-list/estudiantes-list.component';
import { EstudiantesDetailsComponent } from './estudiantes/estudiantes-details/estudiantes-details.component';
import { RouterModule } from '@angular/router';
import { EstudiantesRoutingModule } from './estudiantes/estudiantes-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MaterialModule } from './shared/materials.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FuentesDirective } from './directivas/fuentes.directive';


const appRoutes=[
  {path:'add-edit-estudiantes', component:EstudiantesFormComponent},
  {path:'estudiantes', loadChildren: ()=>import('./estudiantes/estudiantes.module').then(m=>m.EstudiantesModule)},
  {path:'', redirectTo:'/estudiantes', pathMatch:'full'},
  {path:'**', component:PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    EstudiantesFormComponent,
    EstudiantesListComponent,
    EstudiantesDetailsComponent,
    PageNotFoundComponent,
    NavbarComponent,
    FuentesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    EstudiantesRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
