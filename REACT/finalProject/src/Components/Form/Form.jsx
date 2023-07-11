import React, { useState } from 'react'
import './Form.css'

//el preventDefault lo que haces es prevenir el comportamiento por defecto del formulario, el comportamiento por defecto del formulario lo que hace es recargar la pagina y borra el formulario

export const Form = () => {
const[userData, setUserData] = useState ({})
const[formUserData, setFormUserData] = useState({
    nombre:'',
    email:'',
    text:''
})

const [showPersonalData, setShowPersonalData] = useState(false)
const handleRegisterUser = (evento) =>{
    evento.preventDefault()
    console.log(evento)
    setShowPersonalData(true)
    setUserData(formUserData)
        setFormUserData({
            nombre:'',
            email:'',
            text:''
        })
}

const handleChangeRegisterUser = (evento) => {
    console.log(evento.target.name)
    console.log(formUserData)
    setFormUserData({...formUserData, [evento.target.name]: evento.target.value})
    
}
    return (

<>

<form onSubmit={handleRegisterUser} className='formulario'>

<div className='cartaFormulario'>
    
        <div className='contact'>
            <h2>Contact</h2>
        </div>
        <div className='name'>
            <label htmlFor="nombre"><p>Full Name*</p> </label>
            <input name='nombre' id='nombre' value={formUserData.nombre} onChange={handleChangeRegisterUser} required/>
        </div>
        <div className='mail'>
            <label htmlFor="email"> <p>Email*</p> </label>
            <input type="email" id='email' name='email' value={formUserData.email} onChange={handleChangeRegisterUser} required />
        </div>
        <div className='txt'>
            <label htmlFor="text"> <p>Message*</p></label>
            <textarea name="text" id="text" value={formUserData.text} onChange={handleChangeRegisterUser} required></textarea>
        </div>
        <div className='btn'>
            <button type='submit'>Send</button>
        </div>
        {
showPersonalData &&
<div>
    <h2>Gracias {userData.nombre} por tu mensaje</h2>
</div>

}
</div>

</form>


</>
)
}

export default Form