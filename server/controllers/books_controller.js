let books = []
let id = 0;

module.exports = {
    readBook(req,res){
        return res.status(200).json(books)
    },
    createBook(req,res){
        let{title,author} = req.body;
        let newBook = {
            id:id,
            title:title,
            author:author,
        }
        id++
        books.push(newBook)
       return res.status(200).json(books)
    },
    updateBook(req,res){
        let index= books.findIndex(e=>e.id==req.params.id);
        let{title,author} = req.body;


        books[index]={
            id:books[index].id,
            title:title,
            author:author,
        }
        return res.status(200).send(books)
    },
    deleteBook(req,res){
        let index= books.findIndex(e=>e.id==req.params.id);
        books.splice(index,1)
        return res.status(200).json(books)
    }

}