var mongoose = require('mongoose')

var Schema = mongoose.Schema

var bookSchema = Schema(
    {
        _id:{
            type:Schema.ObjectId,auto:true
        },
        titulo:String,
        autor:String,
        editorial:String,
        publicacion:String,
        psinopsis:String
    },
    {
        collection:'libros'
    }
)

module.exports = mongoose.model('book',bookSchema)