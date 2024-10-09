import React from 'react';
import { useState,useEffect} from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import BackButton from '../components/Back'
import { Navigate, useNavigate,useParams} from 'react-router-dom';

function DeleteBook() {
  const [loading,setLoading] = useState(false);
  const nevigate = useNavigate()
  const {id} = useParams()

  const hendleDeleteBook = () => {
    setLoading(true);
    axios.delete(`http://localhost:4444/books/${id}`).
    then(() =>{
      setLoading(false);
      nevigate('/');
    }).catch((error) =>{
      console.log(error);
      alert("some error")
      setLoading(false);
    })
  }
  return(
    <>
      <div className='p-4'>
        <BackButton />
        <h1 className='text-3xl my-4'>Delete Book</h1>
        {loading ? <Spinner/> : ''}
        <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
          <h3 className='text-2xl'>Are you sure you want to delete this book ?</h3>

          <button className='p-4 bg-red-600 text-white m-8 w-full' onClick = {hendleDeleteBook}>
            Yes delete it!
          </button>
        </div>
      </div>
    </>
  );
}

export default DeleteBook;
