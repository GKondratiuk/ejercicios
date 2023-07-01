/* escribir rafce - genera un componente predeterminado. instalaer extension - ES7+ React/Redux/React-Native snippets  */

import React from 'react'

const Background = ({children}) => {
  return (
    <div style={{backgroundColor:'black', padding: '10px'}}>
        {children}
        </div>
  )
}

export default Background