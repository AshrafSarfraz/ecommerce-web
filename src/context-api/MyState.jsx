import React, { useState } from 'react'
import myContext from './MyContext'

export default function MyState(props) {
    const [mode, setMode]=useState('Light')
    const Toggle=()=>{
        if(mode==='Light'){
            setMode('Dark')
            document.body.style.backgroundColor='black'
        }
        else{
             setMode('Light')
            document.body.style.backgroundColor='white'
        }
    }
    return (
    <myContext.Provider value={{mode, Toggle}} >
          {props.children}
    </myContext.Provider>
  )
}
