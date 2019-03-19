import { Component, OnInit } from '@angular/core';
import { book } from '../models/book'
import { ServiceBookService } from '../services/service-book.service'
import { Router,ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-editar-libro',
  templateUrl: './editar-libro.component.html',
  styleUrls: ['./editar-libro.component.css']
})
export class EditarLibroComponent implements OnInit {

  book: book
  constructor(
    private bookservice: ServiceBookService,
    private activateRoute : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.book= new book('','','','','','');
    var idLibro = this.activateRoute.snapshot.params['id']
    console.log(idLibro)
    this.bookservice.getLibro(idLibro).subscribe(
      (result)=>{
        this.book = result['data']

      },
      (error)=>{
        console.error('error buscando item' + error)
      }
    )

  }

  editBook(){
    this.bookservice.updateLibro(this.book._id,this.book).subscribe(
      (result)=>{
        console.log('edit complete')
        this.book = result['data']
      },
      (error)=>{
        console.error('update error')
      }
    )
  }

}
