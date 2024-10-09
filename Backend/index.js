import express from "express";
import {PORT,mongoDBURL} from "./config.js"
import mongoose from  'mongoose';
// import {Book}  from "./models/bookModel.js";
import bookRouter from './routes/booksRoutes.js'
import cors from 'cors'

const app = express();

app.use(express.json());

app.use(cors());
// app.use(
//     cros(
//         {
//             origin : 'http://localhost:3000/',
//             methods : ['GET','POST','DELETE'],
//             allowedHeaders : ['Content-Type']
//         }
//     )
// )
app.use('/books',bookRouter);

mongoose.connect(mongoDBURL)
.then(()=>{
    app.listen(PORT,()=>{
        console.log("app is listening......");
    }); 
    console.log("app is connected to database");
})
.catch((error)=>{
    console.log(error);
})

