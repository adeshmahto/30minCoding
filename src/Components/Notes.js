import React, { useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

function Notes() {

    const BASE_URL=`http://localhost:9090/downloadFile`;
    useEffect(()=>{
        axios.get('/downloadFile/JcK0ryMy').then((response)=>{
            console.log(response.data)

        })
    })
  return (
    <div> 
    <Container>
 
   <Form>
   <a href='/' style={{textDecoration:'none',color:'black'}}><h1>Notes On Languages</h1></a> 
    <li><i>Languages(Java,Python,C,C++,Javascript)</i></li>
    <NoteContainer>
        <Content>
            <h3 style={{color:'#a1fef4' ,fontWeight:'bolder'} }>JAVA</h3>
            <a href={`${BASE_URL}/JcK0ryMy`}><Button>Download</Button></a> 
            <h3 style={{color:'#a1fef4' ,fontWeight:'bolder'} }>PYTHON</h3>
            <a href={`${BASE_URL}/Wmx4Bvkc`}><Button>Download</Button></a> 
            <h3 style={{color:'#a1fef4' ,fontWeight:'bolder'} }>C</h3>
            <a href={`${BASE_URL}/JcK0ryMy`}><Button>Download</Button></a> 
            <h3 style={{color:'#a1fef4' ,fontWeight:'bolder'} }>C++</h3>
            <a href={`${BASE_URL}/JcK0ryMy`}><Button>Download</Button></a> 
            <h3 style={{color:'#a1fef4' ,fontWeight:'bolder'} }>JAVASCRIPT</h3>
            <a href={`${BASE_URL}/JcK0ryMy`}><Button>Download</Button></a> 

        </Content>

    </NoteContainer>

 
   </Form>

 </Container>

 {/* web */}

 <Container>
 
 <Form>
 <a href='/' style={{textDecoration:'none',color:'black'}}><h1>Notes On Frontend</h1></a> 
  <li><i>Frontend(Html,Css,Javascript,React,Angular)</i></li>
  <NoteContainer>
      <Content>
          <h3 style={{color:'#a1fef4' ,fontWeight:'bolder'} }>HTML</h3>
         <a href='htmlnote.pdf'><Button>Download</Button></a> 
          <h3 style={{color:'#a1fef4' ,fontWeight:'bolder'} }>CSS</h3>
          <a href='cssnote.pdf'><Button>Download</Button></a> 
          <h3 style={{color:'#a1fef4' ,fontWeight:'bolder'} }>JAVASCRIPT</h3>
          <a href='javascriptnote.pdf'><Button>Download</Button></a> 
          <h3 style={{color:'#a1fef4' ,fontWeight:'bolder'} }>REACT.JS</h3>
          <a href='reactnote.pdf'><Button>Download</Button></a> 
          <h3 style={{color:'#a1fef4' ,fontWeight:'bolder'} }>ANGULAR</h3>
          <a href='angularnote.pdf'><Button>Download</Button></a> 

      </Content>

  </NoteContainer>


 </Form>

</Container>

{/* backend */}


<Container>
 
 <Form>
 <a href='/' style={{textDecoration:'none',color:'black'}}><h1>Notes On Backend</h1></a> 
  <li><i>Backend(SpringBoot,PHP,Node.js,Database-(MySql,PostGress))</i></li>
  <NoteContainer>
      <Content>
          <h3 style={{color:'#a1fef4' ,fontWeight:'bolder'} }>SPRINGBOOT</h3>
         <a href='springbootnote.pdf'><Button>Download</Button></a> 
          <h3 style={{color:'#a1fef4' ,fontWeight:'bolder'} }>PHP</h3>
          <a href='cssnote.pdf'><Button>Download</Button></a> 
          <h3 style={{color:'#a1fef4' ,fontWeight:'bolder'} }>NODE.JS</h3>
          <a href='javascriptnote.pdf'><Button>Download</Button></a> 
          <h3 style={{color:'#a1fef4' ,fontWeight:'bolder'} }>NODE.JS</h3>
          <a href='javascriptnote.pdf'><Button>Download</Button></a> 
          <h3 style={{color:'#a1fef4' ,fontWeight:'bolder'} }>NODE.JS</h3>
          <a href={`${BASE_URL}/ayxnyfr5`}><Button>Download</Button></a> 
        

      </Content>

  </NoteContainer>


 </Form>

</Container>
 </div>
  )
}

export default Notes
const Container =styled.div`
display: flex;
align-items: center;
justify-content: center;
font-family: 'Maven Pro', sans-serif;
background-image: linear-gradient(90deg, #0AE0FF, #9900FB);
height:100vh;
width:100vw;
flex-direction:col;

`
const Form=styled.div`
background-color: rgba(255, 255, 255, 0.229);
position: relative;
width: 76%;
height: 570px;
border-radius: 4px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
margin-top: 15px;
padding-bottom: 40px;
`
const NoteContainer=styled.div`
padding:20px;
display:flex;
justify-content:center;
`
const Content=styled.div`
background-color: rgba(255, 255, 255, 0.229);
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
width:20vw;
height:65vh;
`
const Button=styled.button`
background-image: linear-gradient(90deg, #0AE0FF, #9900FB);
border-radius:5px 0 5px 0;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
color: #67ffb1;
cursor:pointer;
width:7vw;
height:4vh;


`