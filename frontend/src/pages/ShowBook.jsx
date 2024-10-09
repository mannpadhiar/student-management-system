import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/Back'
import Spinner from '../components/Spinner';

function ShowBook() {
  const [books,setBooks] = useState({});
  const [loading,setLoading] = useState(false);
  const {id} = useParams();

  useEffect(()=>{
    setLoading(true);
    axios.get(`http://localhost:4444/books/${id}`).
    then((response)=>{
      setBooks(response.data)
      setLoading(false);
    }).catch((error) =>{
      console.log(error);
      setLoading(false);
    });

  },[]);
  return(
    <>
      <div className='p-4'>
        <BackButton />
        <h1>Show Book</h1>
        {
          loading ? (<Spinner />):
          (

            <>

          <div class="relative flex flex-col md:flex-row w-full my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-150">
            <div class="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
              <img
                src={books.image ? books.image : "data:image/png;base64,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"}
                alt="card-image"
                class="h-full w-full rounded-md md:rounded-lg object-cover"
              />
            </div>
            <div class="p-6">
              <div class="mb-4 rounded-full bg-teal-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">STUDENT</div>
              <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500'>ID</span>
                <span>{books._id}</span>
              </div>
              <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500'>Title</span>
                <span>{books.title}</span>
              </div>
              <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500'>Name</span>
                <span>{books.name}</span>
              </div>
              <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500'>Divition</span>
                <span>{books.divition}</span>
              </div>
              <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500'>Publish Year</span>
                <span>{books.DOB}</span>
              </div>
              <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500'>create time</span>
                <span>{new Date(books.createdAt).toString()}</span>
              </div>
              <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500'>Last Updated</span>
                <span>{new Date(books.updated).toString()}</span>
              </div>
            </div>
          </div> 

            {/* <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
              <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500'>ID</span>
                <span>{books._id}</span>
              </div>
              <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500'>Title</span>
                <span>{books.title}</span>
              </div>
              <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500'>name</span>
                <span>{books.name}</span>
              </div>
              <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500'>Publish Year</span>
                <span>{books.DOB}</span>
              </div>
              <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500'>create time</span>
                <span>{new Date(books.createdAt).toString()}</span>
              </div>
              <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500'>Last Updated</span>
                <span>{new Date(books.updated).toString()}</span>
              </div>
            </div> */}
          </>
          )
        }
      </div>
    </>
  );
}

export default ShowBook;
