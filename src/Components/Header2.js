import React from 'react'

import styled from 'styled-components'

function Header2({title}) {
  return (
    <Nav>
       <Heading> <a href='/'>{title}</a> </Heading>
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
       
      </NavMenu>
      {/* <Button  style={{background:"black" ,border:" black"}}
        id="UncontrolledPopover"
        type="button"
      >
         <UserImg src="luffy.jpg"/>
      </Button>
      <UncontrolledPopover style={{color:"white",background:"transparent"}}
        placement="bottom"
        target="UncontrolledPopover"
      >
        <PopoverHeader>
         Writer-Name
        </PopoverHeader>
        <PopoverBody>
          
        </PopoverBody>
      </UncontrolledPopover> */}

    </Nav>
  )
}

export default Header2

const Nav = styled.div`
height:80px;
background-image: linear-gradient(90deg, #0AE0FF, #9900FB);
&:hover{
  ${'' /* border:1px solid rgba(249,249,249,0.1); */}
  background:#2c0047;
  transition:all 1000ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
}
display:flex;
align-items:center;
padding:0 36px;
`

const NavMenu = styled.div`

display:flex;
flex:1;
margin-left:10px;
margin-top:8px;
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


const UserImg = styled.img`
width:48px;
height:48px;
border-radius:50%;
cursor:pointer;
margin:10px 0;
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

${'' /* &:hover{
  border:1px solid rgba(249,249,249,0.1);
  transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
} */}








@media screen and (max-width:385px) {

margin-left:-25px;
margin-top:10px;
  
   
   }



`