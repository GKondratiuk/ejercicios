import React from 'react'
import { useCustomContext } from './ContextManager/ContextProvider'


function App() {
const {nombre} = useCustomContext()

  return (
    <>
      <h1>{nombre}</h1>

    </>


  )
}


export default App
