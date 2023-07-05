import React,{createContext, useContext} from 'react'

 

const Context = createContext()

 

const ContextProvider = ({children}) => {

    let nombre = 'pepe'

  return (

    <Context.Provider value={{nombre}}>

        {children}

    </Context.Provider>

  )

}

 

export const useCustomContext = () => useContext(Context)

 

export default ContextProvider

/*todo esto esto es un contexto. El contexto viene a mejorar el uso de los ''estados''. los engloba, nuclea. dejé en 1:00hs de video 


*/