import React from 'react'

export const ListaDeseos = () => {
    const deseos = [ 
        {
            deseo: 'terminar de aprender JS', 
            id: 1
        }, 
            
        {
            deseo: 'Aprender Typescript', 
            id: 2
        }, 
        {
            deseo: 'Aprender Express', 
            id: 3
        }, 
    ]

    const [deseosActuales, setDeseosActuales] = React.useState(deseos)
const cumplirDeseo = (id) =>
setDeseosActuales (deseosActuales.filter(desire =>.id != id))
    return (
    
    <div style={{display: 'flex', alignItems: 'center'}}>
        {deseos.map(desire =>(
            <><h2>Deseo:{desire.deseo}</h2>
            <button> Cumplir </button></>
        ))}
    </div>
)
}
