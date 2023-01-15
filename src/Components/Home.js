import React from 'react'
import styled  from 'styled-components'
import Header from '../Header'
import Guide from './Guide'
import Viewers from './Viewers'

function Home() {
  return (
    <div>
        <Container>
       <Header/>
       <Viewers/>

       <Footer>

       </Footer>
        </Container>
    
       
    </div>
  )
}

export default Home

const Container=styled.div`

`

const Footer=styled.div`

margin-top:80px;
height:30vh;
background:rgb(51, 49, 49);

`