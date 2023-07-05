import React from 'react'
import {ColorCard, Navbar} from './Components'


const App =() => {
const cartasColores = [
  {
    likes: 60,
    hours: 3,
    colors: ['#001C30', '#176B87', '#64CCC5', '#DAFFFB'],
    id: 1 
  },
  {
    likes: 30,
    hours: 2,
    colors: ['#211E00', '#156C57', '#64ACA5', '#DEEFFB'],
    id: 1 
  },
  {
    likes: 10,
    hours: 1,
    colors: ['#074C50', '#156E57', '#63CAE5', '#DEFBFB'],
    id: 1 
  },

]




  return (
    <>
    <Navbar/>
    <div className='colorCardsContainer'>
    {
      cartasColores.map(carta => (
        <ColorCard likes={carta.likes} hours={carta.hours} colors={carta.colors}/>
      )
      )
    }
    </div>
    </>
/*color es un array */
  )
}

export default App
