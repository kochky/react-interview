import React from 'react'
import { useSelector } from 'react-redux'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';


function Error(){
    const props= useSelector(state=>state)

    return (
        <div className="container__error-container"><ErrorOutlineIcon fontSize="large"/><p>{props.error}</p><p>Veuillez réactualiser la page</p></div>
    )
}

export default Error