var Book = require('../models/bookModel')

function getBooks(req, res) {
    Book.find().exec().then(
        (libros) => {
            if (!libros) {
                res.status(404).send({ accion: "get all", mensaje: "no hay libros" })
            } else {
                res.status(200).send({ accion: "get all", data: libros })
            }
        }
    ).catch(
        (err) => {
            res.status(500).send({ accion: "get all", mensaje: "WR error" })
        }
    )
}
function getBook(req, res) {
    var idBook = req.params.id

    Book.findById(idBook).then(
        libroEncontrado => {
            if (!libroEncontrado) {
                res.status(404).send({ accion: "get one", mensaje: "no existe libro" })
            } else {
                res.status(200).send({ accion: "get one", data: libroEncontrado })
            }
        }
    ).catch(
        err => {
            res.status(500).send({ accion: "get one", mensaje: "WR error" })
        }
    )
}

function saveBook(req, res) {

    var param = req.body
    //res.status(200).send({ accion: "save", data: param })
    var book= new Book()
    book.titulo = param.titulo
    book.autor = param.autor
    book.editorial = param.editorial
    book.publicacion = param.publicacion
    book.psinopsis = param.psinopsis



    book.save().then(
        cocheGuardado => {
            res.status(200).send({ accion: "save", data: book})
        }
    ).catch(
        err => {
            res.status(500).send({ accion: "save", mensaje: "WR error" })
        }
    )
}

function deleteBook(req, res) {
  var idBook= req.params.id

    Book.findByIdAndDelete(idBook).then(
        libroEncontrado=> {
            if (!libroEncontrado) {
                res.status(404).send({ accion: "delete", mensaje: "no existe libro" })
            } else {
                res.status(200).send({ accion: "delete", data: libroEncontrado})
            }
        }
    ).catch(
        err => {
            res.status(500).send({ accion: "delete", mensaje: "WR error" })
        }
    )

}

function updateBook(req,res){
    let idBook= req.params.id //
    let param= req.body

    Book.findByIdAndUpdate(idBook,param,{new:true}).then(
        updatedBook=>{
            res.status(200).send({
                accion:'update',
                data:updatedBook
            })
        }
    ).catch(
        err=>{
            res.status(500).send({
                accion:'update',
                message:'Error updating the book'+err     
            })
        }
    )  
}



module.exports = { getBooks, getBook , saveBook,deleteBook, updateBook}
