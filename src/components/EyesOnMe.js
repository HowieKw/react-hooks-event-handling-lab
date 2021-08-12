import React from 'react';


const EyesOnMe = () => {

    function onFocusHandler() {
        console.log('Good!')
    }

    function onBlurHandler() {
        console.log('Hey! Eyes on me!')
    }

    return(
        <button onFocus={onFocusHandler} onBlur={onBlurHandler}>Eyes on me</button>
    )
}

export default EyesOnMe;