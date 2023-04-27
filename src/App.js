
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
import Editor from './Components/Editor';
import Compiler from './Compiler/Compiler';
import Blackboad from './Components/Blackboad';
import PythonContainer from './Components/PythonContainer';
import JavaSriptContainer from './Components/JavaSriptContainer';
import Cpp from './Components/Cpp';
import C from './Components/C';
import Headercopy from './Components/Headercopy';
import Header2 from './Components/Header2';


function App() {

  useEffect(()=>{
  axios.get('api/users/').then((response)=>{console.log(response.data)},
  (error)=>{
    console.log(error)
  })
  },[])

  return (
    <div className="App">

  <Blackboad/>

   
      <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='guide/' element={<Guide/>}/>
         <Route path='notes/' element={<Notes/>}/>
         <Route path='javacontainer/' element={<JavaContainer/>}/>
         <Route path='editor' element={<Compiler/>}/>
         <Route path='pythoncontainer' element={<PythonContainer/>}/>
         <Route path='javasriptcontainer' element={<JavaSriptContainer/>} />
         <Route path='cpp' element={<Cpp/>}/>
         <Route path='c'element={<C/>}/>
         <Route path='h' element={<Headercopy/>}/>
         <Route path='header' element={<Header2/>}/>
         
      </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
