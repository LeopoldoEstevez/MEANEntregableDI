import { Component, OnInit } from '@angular/core';
import { book } from '../models/book'
import { ServiceBookService } from '../services/service-book.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-listar-libros',
  templateUrl: './eliminar-libros.component.html',
  styleUrls: ['./eliminar-libros.component.css']
})
export class EliminarLibrosComponent implements OnInit {

  public libros:book[]

  constructor(
    private bookService:ServiceBookService,
    private router:Router
    ) { }

  ngOnInit() {
    this.bookService.getLibros().subscribe(
      (result)=>{
        this.libros = result['data']
      },
      (error)=>{
        console.error('Erro en la carga de elementos ' + error)
      }
    )
  }

  deleteBook(id){
    this.bookService.deleteLibro(id).subscribe(
      (result)=>{
        location.reload()
      },
      (error)=>{
        console.log("error update" + error)
      }
    )
  }

}

