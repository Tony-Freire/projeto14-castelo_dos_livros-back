import db from "../db.js";


export function getBooks(req,res)
{
    db.collection("books").find({}).toArray((err,results)=>{
        return res.send(results)
    });
}

export function getBookInfo(req,res)
{
 const bookInfo= db.collection("books").find(x=>x.slug===req.params.slug);
 if(bookInfo){
    res.send(bookInfo);
 }
 else{res.send(404).send({message: "livro não encontrado"})}
     
}
  