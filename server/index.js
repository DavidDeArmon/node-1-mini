const express = require ('express'),
    bc = require ('./controllers/books_controller'),
    bodyParser= require('body-parser'),
    port = 3000,
    app = express();

    app.use(bodyParser.json())
    app.use(express.static( __dirname + '/../build'))


    app.get('/api/books',bc.readBook)
    app.post('/api/books',bc.createBook)
    app.put('/api/books/:id',bc.updateBook)
    app.delete('/api/books/:id',bc.deleteBook)

    app.listen(port,()=>console.log('server is started. port is : '+port))