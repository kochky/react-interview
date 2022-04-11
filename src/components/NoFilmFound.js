import React from 'react'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import { useSelector } from 'react-redux'


function NoFilmFound(){
    const props= useSelector(state=>state)

    return(
        <div className="container__no-film">
            <SentimentDissatisfiedIcon fontSize="large"/>
            <div>  Aucun film trouvé ! </div>
            {props.filterOn && <div>Effacement des filtres...</div>}
        </div>

    )
}

export default NoFilmFound