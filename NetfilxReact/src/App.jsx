import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import CustomNavbar from './components/Organism/CustomNavbar';
import Main from './components/Organism/Main';
import CustomFooter from './components/Organism/CustomFooter';

function App() {
 
  return (
    <>
      <CustomNavbar/>
      <Main/>
      <CustomFooter/>
    </>
  )
}

export default App
