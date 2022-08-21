const quoteModel = require('../db/quote-schema')

const getPosts = ('/', async(req,res)=>{
    try {
        const allQuotes =await quoteModel.find({})
        res.status(200).json(allQuotes)
 //       res.send(`<br/> <a href='/logout'>Logout</a>`)
    } catch (error) {
        console.log(error)
    }
    
})
const createPost = ('/', async(req,res)=>{
    try {
        const newQuote = new quoteModel({
            img: req.body.img,
            desc: req.body.desc,
            author: req.body.author
        })
        const saveQuote =await newQuote.save()
        res.status(200).json(saveQuote)
        // console.log(saveQuote)
    } catch (error) {
        console.log(error)
    }
})
const editPost = ('/:id',async(req,res)=>{
    try {
        const editQuote = await quoteModel.findByIdAndUpdate(req.params.id,{$set:req.body})
        res.status(200).json('Quote edited')
        console.log(editQuote)
    } catch (error) {
        console.log(error)
    }
})
const deletePost = ('/:id',async(req,res)=>{
    try {
        const deleteQuote =await quoteModel.findByIdAndDelete(req.params.id,{$set:req.body})
        res.status(200).send('item deleted')
        // console.log(deleteQuote);
    } catch (error) {
        console.log(error)
    }
})
module.exports = {getPosts, deletePost,createPost, editPost}