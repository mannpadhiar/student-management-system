import React from 'react';
import { useState,useEffect} from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import BackButton from '../components/Back'
import { Navigate, useNavigate,useParams} from 'react-router-dom';

function EditBook() {
  const [title,setTitle] = useState('');
  const [name,setName] = useState('');
  const [DOB,setDOB] = useState('');
  const [image,setImage] = useState('');
  const [divition,setDivition] = useState('');
  const [loading,setLoading] = useState(false); 
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(()=>{
    setLoading(true);
    axios.get(`http://localhost:4444/books/${id}`).
    then((Responce)=>{
      setName(Responce.data.name);
      setDivition(Responce.data.divition);
      setTitle(Responce.data.title);
      setDOB(Responce.data.DOB);
      setImage(Responce.data.setImage);
      setLoading(false)
    }).catch((error)=>{
      alert('An error founded!!!!');
      console.log(error);
      setLoading(false);
    })
  },[])
  const hendleEditBook = () =>{
    const data = {
      title,
      name,
      DOB,
      image
    }
    setLoading(true);
    axios.put(`http://localhost:4444/books/${id}`,data).
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
      <div className = 'p-4'>
        <BackButton/>
        <h1 className = 'text-3xl my-4'>Create Book</h1>
        {loading ? <Spinner/> : ''}
        <div className = 'flex flex-col border-2 border-sky-200 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Title</label>
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
          <button className='p-2 bg-sky-300 m-8' onClick={hendleEditBook}>
            SAVE
          </button>
        </div>
      </div>
      </div>
    </>
  );
}

export default EditBook;
