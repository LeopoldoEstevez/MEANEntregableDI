import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { book } from '../models/book'

@Injectable({
  providedIn: 'root'
})
export class ServiceBookService {

  urlMongoose = 'https://evening-wave-76207.herokuapp.com' 

  constructor(private httpCliente: HttpClient) { }

  getLibros() {
    return this.httpCliente.get<any>(this.urlMongoose + '/libros')
  }

  getLibro(id){
    return this.httpCliente.get<any> (this.urlMongoose + '/libro/' + id)
  }

  saveLibro(libro:book){
    const parametros = JSON.stringify(libro)
    const headers = new HttpHeaders({'Content-Type':'application/json'})
    return this.httpCliente.post(this.urlMongoose + '/libro',parametros,{headers:headers})
  }

  updateLibro(id,libro:book){
    const parametros = JSON.stringify(libro)
    const headers = new HttpHeaders({'Content-Type':'application/json'})
    return this.httpCliente.put(this.urlMongoose + '/libro/' + id ,parametros,{headers:headers})
  }

  deleteLibro(id){
    return this.httpCliente.delete(this.urlMongoose + '/libro/' + id)
  }
}
