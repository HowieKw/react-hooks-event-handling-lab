import React from 'react';


const Keypad = () => {

    function handleOnChange() {
        console.log('Entering password...')
    }

    return(
        
        <input type='password' onChange={handleOnChange}></input>
    )
}

export default Keypad;