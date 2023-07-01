import React from 'react' /* viene de NODE, es lo que hace que todo funcione */
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render( /*Esto renderiza, solo vamos a rendizar el app, ese app es nuestro archivo app.jsx*/
    <App />
)