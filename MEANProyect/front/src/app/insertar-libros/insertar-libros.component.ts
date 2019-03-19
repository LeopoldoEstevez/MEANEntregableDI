import { Component, OnInit } from '@angular/core';
import { book } from '../models/book'
import { ServiceBookService } from '../services/service-book.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-insertar-libros',
  templateUrl: './insertar-libros.component.html',
  styleUrls: ['./insertar-libros.component.css']
})
export class InsertarLibrosComponent implements OnInit {

  book:book
  constructor(
    private bookservice:ServiceBookService,
    private router:Router
  ) { }

  ngOnInit() {
    this.book = new book('','','','','','')
  }

  saveBook(){

    this.bookservice.saveLibro(this.book).subscribe(
      (result)=>{
        this.book = result['data']
      },
      (error)=>{
        console.log('Error' + error)
      }
    )
  }

}
