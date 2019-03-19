import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ListarLibrosComponent } from './listar-libros/listar-libros.component';
import { InsertarLibrosComponent } from './insertar-libros/insertar-libros.component';
import { EliminarLibrosComponent } from './eliminar-libros/eliminar-libros.component';
import { EditarLibroComponent } from './editar-libro/editar-libro.component';

const routes: Routes = [
  {path:"",component:MainMenuComponent},
  {path:"listaLibros",component:ListarLibrosComponent},
  {path:"insertarLibros",component:InsertarLibrosComponent},
  {path: "eliminarLibro",component:EliminarLibrosComponent},
  {path: "editarLibro/:id",component:EditarLibroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
