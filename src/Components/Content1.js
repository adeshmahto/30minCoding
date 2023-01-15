import React from 'react'
import styled from 'styled-components'

function Content1() {
  return (
    <div>
        <Container>
        <FormContainer>
            <Form> 
                <Header><a href='/' style={{color:"black",textDecoration:"none"}} >Introduction</a></Header>
                <Main> Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere (WORA),[17] meaning that compiled Java code can run on all platforms that support Java without the need to recompile.[18] Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of the underlying computer architecture. The syntax of Java is similar to C and C++, but has fewer low-level facilities than either of them. The Java runtime provides dynamic capabilities (such as reflection and runtime code modification) </Main>
            </Form>
        </FormContainer>
        </Container>

      
    </div>
  )
}

export default Content1

const Container=styled.div`
height:100vh;
display:flex;
justify-content:center;
align-items: center;
background-image: linear-gradient(90deg, #0AE0FF, #9900FB);

`

const FormContainer=styled.div`
position: relative;
width: 60vw;
height: 470px;
max-width: 43vw;
max-height: 90vh;
background: #040717;
border-radius: 50px 5px;
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
margin-top: 70px;
&:before{
     
    position: absolute;
    width: 170%;
    height: 170%;
    content: '';
    background-image: conic-gradient(transparent, transparent, transparent, #ee00ff);
    animation: rotate_border 6s linear infinite;
}
&:after{
    position: absolute;
    width: 170%;
    height: 170%;
    content: '';
    background-image: conic-gradient(transparent, transparent, transparent, #00ccff);
    animation: rotate_border 6s linear infinite;
    animation-delay: -3s;
}
@keyframes rotate_border{
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}

`
const Form=styled.div`
position: absolute;
content: '';
background-image: linear-gradient(90deg, #35c2d8, #8e19d7,rgb(255, 4, 184));
border-radius: 50px 5px;
inset: 5px;
padding: 50px 40px;
z-index: 10;


`
const Header=styled.h1`
color:  rgb(30, 29, 29);
`
const Main=styled.p`
color: rgb(30, 29, 29);
font-size:17px;

`