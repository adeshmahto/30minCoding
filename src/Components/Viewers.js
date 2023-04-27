
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'


function Viewers() {
  return (
    <Container>
         <Container2>
         <Wrap  >
            <a href='javacontainer/'>
            <img  style={{height:'130px',width:"100px"}} src="javaimg2.png"/>
            </a>
        </Wrap>
       <h2>Java</h2>
         </Container2>
         <Container2>
         <Wrap  >
            <a href='/pythoncontainer'>
            <img  style={{height:'130px',width:"100px"}} src="pythonimg2.png"/>
            </a>
        </Wrap>
        <h2>Python</h2>
         </Container2>
         <Container2>
         <Wrap  >
            <a href='/javasriptcontainer'>
            <img  style={{height:'130px',width:"130px"}} src="javasripte.png"/>
            </a>
        </Wrap>
        <h2>Javascript</h2>
         </Container2>
         <Container2>
         <Wrap  >
            <a href='/cpp'>
            <img  style={{height:'130px',width:"170px"}} src="c.png"/>
            </a>
        </Wrap>
        <h2>C++</h2>
         </Container2>
         <Container2>
         <Wrap  >
            <a href='/c'>
            <img  style={{  height:'130px',width:"170px"}} src="cl.png"/>
            </a>
        </Wrap>
        <h2>C</h2>
         </Container2>
     
      
       
    
    </Container>
  )
}

export default Viewers


const Container=styled.div`
backgroung:whitesmoke;
overflow:hidden;
padding:10px;
margin-top:30px;
display:grid;
padding:30px 0 26px;
grid-gap:25px;
grid-template-columns:repeat(5, minmax(0,1fr));


`
const Wrap =styled.div`
background-image: linear-gradient(90deg, #0AE0FF, #9900FB);

cursor:pointer;
border-radius:10px;
img{
    width:100%;
    height:100%;
    object-fit:cover;
}


  
@media screen and (max-width:385px) {

    height:60px;
    width:70px;

    img{
        width:20px;
        height:30px;
       
    }
     
     }


`
const Container2=styled.div`

background: rgb(51, 49, 49);
color:white;
height:250px;
margin:20px;
cursor:pointer;
border-radius:10px;
border:3px solid rgba(249,249,249,0.1);
box-shodow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 75%) 0px 16px 10px -10px;
transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
&:hover{
    transform:scale(1.05);
    border-color: rgba(249,249,249,0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
rgb (0 0 0 / 72%) 0px 30px 22px -10px;
}

@media screen and (max-width:385px) {

    height:200px;
    width:80px;
    margin-left:5px;
    padding:5px;
  
     
     }


`