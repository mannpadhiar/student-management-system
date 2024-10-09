import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import BackButton from '../components/Back'
import { Navigate, useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';

function CreateBook() {
  const [title,setTitle] = useState('');
  const [name,setName] = useState('');
  const [image,setImage] = useState('');
  const [DOB,setDOB] = useState('');
  const [divition,setDivition] = useState('');
  const [loading,setLoading] = useState(false); 
  const navigate = useNavigate();

  const hendleSaveBook = () =>{
    const data = {
      title,
      name,
      DOB,
      image,
      divition,
    }
    setLoading(true);
    axios.post('http://localhost:4444/books',data).
    then(()=>{
      setLoading(false);
      navigate('/');
    }).
    catch((error) => {
      setLoading(false)
      console.log(error)
    })
  }
  return(
    <>
      <NavBar/>
      <div className = 'p-4'>
        {loading ? <Spinner/> : ''}
        <div className = 'flex flex-col border-2 border-sky-200 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Feedback</label>
          <input 
            type='text'
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
            className='border-2 border-grey-500 px-4 py-2  w-full'
          ></input>
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>name</label>
          <input 
            type='text'
            value={name}
            onChange={(e)=> setName(e.target.value)}
            className='border-2 border-grey-500 px-4 py-2  w-full'
          ></input>
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Divition</label>
          <input 
            type='text'
            value={divition}
            onChange={(e)=> setDivition(e.target.value)}
            className='border-2 border-grey-500 px-4 py-2  w-full'
          ></input>
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Date of Birth</label>
          <input 
            type='text'
            value={DOB}
            onChange={(e)=> setDOB(e.target.value)}
            className='border-2 border-grey-500 px-4 py-2  w-full'
          ></input>
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Image URL</label>
          <input 
            type='text'
            value={image}
            onChange={(e)=> setImage(e.target.value)}
            className='border-2 border-grey-500 px-4 py-2  w-full'
          ></input>
          <button className='p-2 bg-sky-300 m-8' onClick={hendleSaveBook}>
            SAVE
          </button>
        </div>
      </div>
      </div>
    </>
  );
}

export default CreateBook;
