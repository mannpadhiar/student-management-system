import React from 'react';
import {Route,Routes} from 'react-router-dom';
import CreateBook from './pages/CreateBook';
import DeleteBook from './pages/DeleteBook';
import EditBook from './pages/EditBook';
import Home from './pages/Home';
import ShowBook from './pages/ShowBook';
import StudentList from './pages/StudentList'

function App() {
  return(
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books/create' element={<CreateBook />} />
        <Route path='/books/edit/:id' element={<EditBook />} />
        <Route path='/books/details/:id' element={<ShowBook />} />
        <Route path='/student' element={<StudentList />} />
        <Route path='/books/delete/:id' element={<DeleteBook />} />
      </Routes>
    </>
  );
}

export default App
