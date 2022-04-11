import React from 'react'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import { useSelector } from 'react-redux'


function NoFilmFound(){
    const props= useSelector(state=>state)

    return(
        <>
        <SentimentDissatisfiedIcon fontSize="large"/>
        <div className="container__no-film">  Aucun film trouvé ! </div>
        {props.filterOn && <div>Effacement des filtres...</div>}
        </>

    )
}

export default NoFilmFound