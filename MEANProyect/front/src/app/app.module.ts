import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { M01BannerBienvenidaComponent } from './m01-banner-bienvenida/m01-banner-bienvenida.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ListarLibrosComponent } from './listar-libros/listar-libros.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InsertarLibrosComponent } from './insertar-libros/insertar-libros.component';
import { EliminarLibrosComponent } from './eliminar-libros/eliminar-libros.component';
import { EditarLibroComponent } from './editar-libro/editar-libro.component'

@NgModule({
  declarations: [
    AppComponent,
    M01BannerBienvenidaComponent,
    MainMenuComponent,
    ListarLibrosComponent,
    InsertarLibrosComponent,
    EliminarLibrosComponent,
    EditarLibroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
