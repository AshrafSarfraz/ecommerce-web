import React, { useState } from 'react'
import myContext from './MyContext'

export default function MyState({children}) {
    const [mode, setMode]=useState('light')
    const toggleMode=()=>{
        if(mode==='light'){
            setMode('dark')
            document.body.style.backgroundColor='black'
        }
        else{
             setMode('light')
            document.body.style.backgroundColor='white'
        }
    }
    return (
    <myContext.Provider value={{mode, toggleMode}} >
          {children}
    </myContext.Provider>
  )
}
