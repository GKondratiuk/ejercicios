import React from 'react'
import './App.css'
import { Footer, Navbar, Form, ProductCard,  } from './Components'
import { DetailPage, HomePage } from './Screens'
import { useCustomContext } from './ContextManager/ContextProvider'
import { Route, Routes} from 'react-router-dom'


function App() {





  return (

    <>
<Routes>
  
  <Route path='/' element = {<HomePage/>}/>
  <Route path='Detail' element={<DetailPage/>}/>
</Routes>


    </>

  )

}



export default App
