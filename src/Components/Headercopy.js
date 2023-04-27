import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'

function Headercopy() {
    const { loginWithRedirect } = useAuth0();

    const { logout } = useAuth0();
  
    const { user,  isAuthenticated } = useAuth0();
  
    const [name,setName]=useState((null));
  
    if(isAuthenticated){
      console.log(user.address)
    }
  
  return (
    <Nav>
    {/* <Heading> <a href='/'>Blog</a> </Heading> */}
   <NavMenu>
     <a href='/'>
       <span>Home</span>
     </a>
     <a href='/about'>
       <span>About</span>
     </a>
     <a href='/guide/'>
       <span>Guide</span>
     </a>
     <a href='/notes'>
       <span>Notes</span>
     </a>
     <a href='/editor'>
       <span>Editor</span>
     </a>
     {/* {
       isAuthenticated && <p> {user.name}</p>
     } */}
    
    

     <Login>
  
   
     {
       isAuthenticated?(
         <a className='btn' onClick={() => logout({ returnTo: window.location.origin })}>
         Log Out
       </a>

       ):(    <a className='btn' onClick={() => loginWithRedirect()}>Log In</a>)
     }
  

     
     </Login>

    

   </NavMenu>



  
 </Nav>
  )
}

export default Headercopy

const Nav = styled.div`


height:10vh;
background-image: linear-gradient(90deg, #0AE0FF, #9900FB);
display:flex;
align-items:center;
padding:0 36px;
border: solid 2px rgb(51, 49, 49);
`

const NavMenu = styled.div`
position:relative;
top:40vh;
display:flex;
flex:1;
margin-left: -40px;
margin-top: -150px;
align-items:center;
padding:0 36px;
@media screen and (max-width:385px) {

  margin-top:30px;
  margin-left: -69px;
  
   
   }
a{
  text-decoration:none;
    display:flex;
    align-items:center;
    padding:0 12px;
    cursor:pointer;
    img{
      height:20px;
      
    }
    span{
      color:white;
      font-size:20px;
      letter-spacing:1.42px;
      position:relative;
      @media screen and (max-width:385px) {

        font-size:15px;
        
         
         }
  
      &:after {                         // & means inside given tag-> div which created after the span tag
        content:" ";
        height:2px;
        background:white;
        position:absolute;
        left:0;
        right:0;
        bottom:-6px;
        opacity:0;
        transform-origin:left center;
        transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
        transform:scaleX(0);
      }
    }
    &:hover{               // a tag hover
      span:after{
        transform:scaleX(1);
        opacity:1;
      }
    }
  }
`




const Heading=styled.h1`
color:white;
box-shodow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 75%) 0px 16px 10px -10px;
border:1px solid whitesmoke;
border-radius:15px;
padding:2px;

cursor:pointer;
a{
  text-decoration:none;
  color:white;
}

&:hover{
  border:1px solid rgba(249,249,249,0.1);
  transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
}
@media screen and (max-width:385px) {

margin-left:-25px;
margin-top:10px;
  
   
   }

`
const Login=styled.div`
position:relative;
top:8px;
left:60vw;
color:white;
font-size:18px;
letter-spacing:1.42px;

`