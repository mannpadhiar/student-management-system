import express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();

// router.get('/',(req,res)=>{
//     return res.status(324).send("welcome bhai"); 
// });

router.post('/',async (req,res)=>{
    try{
        if(!req.body.title || !req.body.name || !req.body.DOB){
            return res.status(400).send({message : "send all fields!!!"})
        }

        const newBook = {
            title : req.body.title,
            name : req.body.name,
            DOB : req.body.DOB,
            image : req.body.image,
            divition : req.body.divition
        }

        const book = await Book.create(newBook);

        return res.status(201).send(book);

    }
    catch(error){
        console.log(error.message);
        res.status(400).send({message : error.message});
    }
});

router.get('/',async (req,res)=>{
    try{
        const books = await Book.find({});
        return res.status(200).json({
            count : books.length,
            data : books
        });
    }
    catch(error){
        console.log(error.message)
        res.status(400).send({message : error.message});
    }
})

router.get('/:id',async (req,res)=>{
    try{
        const {id} = req.params;
        const book = await Book.findById(id);
        return res.status(200).json(book);
    }
    catch(error){
        console.log(error.message)
        res.status(400).send({message : error.message});
    }
});

router.put('/:id',async (req,res)=>{
    try{
        if(!req.body.title || !req.body.name || !req.body.DOB){
            return res.status(400).send({message : "send all fields!!!"});
        }
        const id = req.params.id;
        const result = await Book.findByIdAndUpdate(id, req.body);
        if(!result){
            res.status(404).json({message : 'Book not found!!!'});
        }
        else{
            res.status(200).json({message : 'Updated!!!'});
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).send({message : error.message});
    }
});

router.delete('/:id',async (req,res)=>{
    try{
        // if(!req.body.title || !req.body.name || !req.body.DOB){
        //     return res.status(400).send({message : "send all fields!!!"});
        // }
        const id = req.params.id;
        const result = await Book.findByIdAndDelete(id);
        if(!result){
            res.status(404).json({message : 'Book not found!!!'});
        }
        else{
            res.status(200).json({message : 'Deleted!!!'});
        }
    }
    catch(error){
        console.log(error.message);
        res.status(500).send({message : error.message});
    }
});

export default router; 