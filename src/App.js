
import './App.css';
import Home from './Components/Home';
import Typical from 'react-typical';
import Content1 from './Components/Content1';
import JavaContainer from './JavaContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from './Header';
import Guide from './Components/Guide';
import Notes from './Components/Notes';
import axios from 'axios'
import { useEffect } from 'react';


function App() {

  useEffect(()=>{
  axios.get('api/users/').then((response)=>{console.log(response.data)},
  (error)=>{
    console.log(error)
  })
  },[])

  return (
    <div className="App">



      <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='guide/' element={<Guide/>}/>
         <Route path='notes/' element={<Notes/>}/>
         <Route path='javacontainer/' element={<JavaContainer/>}/>
      </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
