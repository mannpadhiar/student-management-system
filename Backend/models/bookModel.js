import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
        title:{
            type : String,
            required : true
        },
        name:{
            type : String,
            required : true
        },
        DOB:{
            type : String,
            required : true
        },
        image:{
            type : String,
            required : false
        },
        divition:{
            type : String,
            required : false
        }
    },
    {
        timestamps : true
    }
);

export const Book = mongoose.model('cat',bookSchema);
// export default bookSchema