import React from 'react';
import './Button.css'

const Button = ({funcion, type}) =>{

    return(
        <button onClick={funcion} className={'btn ' + type}>Click</button>
    )
}

export default Button /*RECORDAR SIEMPRE ''EXPORTAR'' EL ARCHIVO E ''IMPORTARLO'' EN LA APP */