import { Component, OnInit } from '@angular/core';
import { book } from '../models/book'
import { ServiceBookService } from '../services/service-book.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-listar-libros',
  templateUrl: './listar-libros.component.html',
  styleUrls: ['./listar-libros.component.css']
})
export class ListarLibrosComponent implements OnInit {

  public libros:book[]

  constructor(
    private bookService:ServiceBookService,
    private router:Router
    ) { }

  ngOnInit() {
    this.bookService.getLibros().subscribe(
      (result)=>{
        this.libros = result['data']
        console.log(this.libros[1]._id)
      },
      (error)=>{
        console.error('Erro en la carga de elementos ' + error)
      }
    )
  }

}
