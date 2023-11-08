import React from 'react';
import './App.css';
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Navber from './components/Navber';
import Footer from './components/Footer';

const App = () => {
  return (
<Box width="500px" sx={{width: {xl:'1700px'}}}>
    <Navber/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/exercise/:id' element={< ExerciseDetail/>} />
    </Routes>
    <Footer/>
</Box>
  )
}

export default App