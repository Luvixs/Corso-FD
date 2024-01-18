import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Account from './components/Page/Account';
import Main from './components/Organism/Main';
import CustomFooter from './components/Organism/CustomFooter';
import { Route, Routes } from 'react-router-dom';

function App() {
 
  return (
    <>
      <Routes>
      <Route path='/' element={ <Main/>}></Route>
      <Route path='/account' element={ <Account/>}></Route>
      </Routes>
      <CustomFooter/>
    </>
  )
}

export default App
