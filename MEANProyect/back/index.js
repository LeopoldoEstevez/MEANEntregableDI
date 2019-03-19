'use strict'

var mongoose = require('mongoose')
var app = require('./app')
var keys = require('./keys')

var mongo = keys.mongo


var bookControler = require('./controllers/books')
var port = process.env.PORT || 8080
mongoose.connect(mongo, { useNewUrlParser: true }).then(
    () => {
        console.log('Connection successful')
        app.listen(port, () => {
            console.log('Conection to API REST complete ')
        })
    },err => {console.log('connection failed' + err)}
)



app.get('/libros' , bookControler.getBooks)
app.get('/libro/:id',bookControler.getBook)
app.post('/libro',bookControler.saveBook)
app.delete('/libro/:id',bookControler.deleteBook)
app.put('/libro/:id',bookControler.updateBook)