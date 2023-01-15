import React from 'react'
import styled from 'styled-components'

function Guide() {
  return (
  <div>
        <Container>
           {/* dsa */}
          <Form>
          <a href='/' style={{textDecoration:'none',color:'black'}}> <h1>DSA</h1></a>
           <li><i>Programming Language</i></li>
           <Content>
            <Videos>
            <Frame src="https://www.youtube.com/embed/gfDE2a7MKjA"></Frame>
            <Frame src="https://www.youtube.com/embed/irqbmMNs2Bo"></Frame>
            <Frame src="https://www.youtube.com/embed/ntLJmHOJ0ME"></Frame>
            <Frame src="https://www.youtube.com/embed/Iuo9PpGE04Y"></Frame>
            </Videos>
           </Content>
      
           <li><i>Dsa in (c/c++,Java,Python)</i></li>
           <Content>
            <Videos>
            <Frame src="https://www.youtube.com/embed/pkYVOmU3MgA"></Frame>
            <Frame src="https://www.youtube.com/embed/AT14lCXuMKI"></Frame>
            <Frame src="https://www.youtube.com/embed/rZ41y93P2Qo"></Frame>
            <Frame src="https://www.youtube.com/embed/WQoB2z67hvY"></Frame>
            </Videos>
           </Content>
           <li><i>Platform For Practice</i></li>
           <Link>
           <ul ><a style={{color:'red'}}  href='https://www.geeksforgeeks.org/'><b>Geeks For Geeks</b></a></ul>
           <ul><a style={{color:'red'}}  href='https://www.hackerrank.com'><b>HackerRank</b></a></ul>
           <ul><a style={{color:'red'}} href='https://www.leetcode.com'><b>LeetCode</b></a></ul>
           </Link>
          </Form>

        </Container>



     {/* web */}

        
        <Container>
         
          <Form>
          <a href='/' style={{textDecoration:'none',color:'black'}}><h1>Web-Development</h1></a>  
           <li><i>Frontend (Html,Css,Javascripte,React.js)</i></li>
           <Content>
            <Videos>
            <Frame src="https://www.youtube.com/embed/BsDoLVMnmZs"></Frame>
            <Frame src="https://www.youtube.com/embed/Edsxf_NBFrw"></Frame>
            <Frame src="https://www.youtube.com/embed/lI1ae4REbFM"></Frame>
            <Frame src="https://www.youtube.com/embed/tiLWCNFzThE"></Frame>
          
            </Videos>
           </Content>
      
           <li><i>Backend (Node.js,SpringBoot,PHP,Django)</i></li>
           <Content>
            <Videos>
            <Frame src="https://www.youtube.com/embed/Oe421EPjeBE"></Frame>
            <Frame src="https://www.youtube.com/embed/Uh-N_6Lccr4"></Frame>
            <Frame src="https://www.youtube.com/embed/6EukZDFE_Zg"></Frame>
            <Frame src="https://www.youtube.com/embed/OTmQOjsl0eg"></Frame>
            </Videos>
           </Content>
    
          </Form>

        </Container>

        
     {/* Machine-Learning*/}

        
     <Container>
         
         <Form>
         <a href='/' style={{textDecoration:'none',color:'black'}}><h1>Machine-Learning</h1></a> 
          <li><i>Language(Python,Ruby,R)</i></li>
          <Content>
           <Videos>
           <Frame src="https://www.youtube.com/embed/eWRfhZUzrAc"></Frame>
           <Frame src="https://www.youtube.com/embed/t_ispmWmdjY"></Frame>
           <Frame src="https://www.youtube.com/embed/Q5g6lYUn6Q4"></Frame>
     
         
           </Videos>
          </Content>
     
          <li><i>Machine-learning with(Python,Ruby,R)</i></li>
          <Content>
           <Videos>
   
           <Frame src="https://www.youtube.com/embed/c8W7dRPdIPE"></Frame>
           <Frame src="https://www.youtube.com/embed/Zl17mtp1adM"></Frame>
           <Frame src="https://www.youtube.com/embed/6dEUTmoXz0w"></Frame>
          
           </Videos>
          </Content>
   
         </Form>

       </Container>
        </div>

  )
}

export default Guide
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
const Content=styled.div`
`
const Videos=styled.div`
display:flex;
align-items:center;
justify-content:center;
padding:10px;
`
const Frame=styled.iframe`
margin:10px;
border-radius:10px;
width:250px;

`
const Link=styled.div`
display:flex;
align-items:center;
justify-content:center;
margin-top:10px;
margin-right:25px;

`