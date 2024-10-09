import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import axios from 'axios';
import Spinner from '../components/Spinner'; 
import '../index.css';
import { Link } from 'react-router-dom'; 

function StudentList() {
  const [students, setStudents] = useState({}); 
  const [loading, setLoading] = useState(false);
  const [div, setDiv] = useState([]); 

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:4444/books')
      .then((response) => {
        setStudents(response.data.data)
        const Divs = response.data.data.map((res) => res.divition);
        const newDivs = [...new Set(Divs)] 
        setDiv(newDivs); 
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <NavBar />
      {loading ? (
        <Spinner />
      ) : (
        div.map((res, index) => (
          <div key={index}>
            <div style={{width:'100vw', display: 'flex', justifyContent:'center'}}>
              <h1 className='ListName'>{res}</h1>
            </div>
            <div className="overflow-x-auto whitespace-nowrap py-4">
              <div className="flex space-x-4">
                {students.map((temp, indexOne) => {
                  if (temp.divition === res) {
                    return (
                      <Card image={temp.image} name = {temp.name} DOB = {temp.DOB} id ={temp._id}/>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
}

export function Card({ image = 'https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg',name,DOB,id}) {

  return (
    <Link to = {'/books/details/'+ id}>
      <div className="relative flex flex-col my-3 bg-white shadow border border-slate-200 rounded-lg w-64">
        <div className="relative h-32 m-2 overflow-hidden text-white rounded-md">
          <img
            src='https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg'
            alt="card-image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-2">
          <div className="flex items-center mb-1">
            <h1 className="text-slate-800 text-lg font-semibold">Name : {name}</h1>
          </div>
          <div className="flex items-center mb-1">
            <h1 className="text-slate-800 text-sm font-semibold">DOB : {DOB}</h1>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default StudentList;
