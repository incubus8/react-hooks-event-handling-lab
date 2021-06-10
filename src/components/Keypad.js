// Code Keypad Component Here
import React from 'react'

function Keypad (){
    function handleChange() {
        console.log('Entering password')
    }
    return(
            <input type = 'password' placeholder= 'Enter password' onChange = {handleChange}/>
    )
}



export default Keypad