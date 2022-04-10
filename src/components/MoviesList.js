import React, { useEffect } from 'react';
import ImgMediaCard from "./Card"
import Skeleton from '@mui/material/Skeleton';
import Card from '@mui/material/Card';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import Box from '@mui/material/Box';
import { apiCallMovies } from '../constants/fetchMovies'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useSelector, useDispatch } from 'react-redux'
import {noRender} from '../constants/actions'

//Global pour éviter effacement pendant re-render
var movieArray=[]

function MoviesList (){
    const dispatch = useDispatch()
    const props= useSelector(state=>state)

    useEffect(() => {
        if(props.data.length===0){
            dispatch(apiCallMovies())
        }
    }, [])

    //empêche un re-render inutile de toute la liste si les likes d'un film changent
    if(props.isLoaded && props.render ){
        movieArray=[]
        props.data.map(movie=>movieArray.push(<ImgMediaCard  key={movie.id} id={movie.id} />))

        //cards invisible à la fin pour l'alignement
        movieArray.push(<div className="card-wrapper" key={"invisible-1"}><Card className="card" sx={{ maxWidth: 345, maxHeight:345}}/></div>)
        movieArray.push(<div className="card-wrapper"key={'invisble-2'}><Card className="card" sx={{ maxWidth: 345, maxHeight:345}}/></div>)
        movieArray.push(<div className="card-wrapper" key={'invisble-3'}><Card className="card" sx={{ maxWidth: 345, maxHeight:345}}/></div>)
        movieArray.push(<div className="card-wrapper" key={'invisble-4'}><Card className="card" sx={{ maxWidth: 345, maxHeight:345}}/></div>)
        dispatch(noRender())
    }
    
    return (
        <div className="container">
            <h1 className="container__title">Movies</h1>
            <div className="container__filter"></div>
            {props.error ? (
                <div className="container__error-container"><ErrorOutlineIcon fontSize="large"/><p>{data.error}</p><p>Veuillez réactualiser la page</p></div>):(
                <div className="container__card-list">
                    {props.loading && (
                        Array.from(new Array(6)) : data).map((item, index) => (
                            <Box className="card" key={index} sx={{ width:345, height:345, margin:0 }}>
                                <Skeleton variant="rectangular" width={345} height={140} />
                                <Skeleton variant="rectangular" width={345} height={140} />
                                <Box sx={{height:65}}>
                                    <Skeleton height={65}/>
                                </Box>
                            </Box>
                        )
                    )}
                    {(props.isLoaded && props.data.length>0 )&&(
                       movieArray
                    )}
                    {(props.isLoaded && props.data.length===0 )&&(
                       <div className="container__no-film"> <SentimentDissatisfiedIcon fontSize="large"/> Aucun film trouvé ! </div>
                    )}
                </div>)}
        </div>
    )
}

export default MoviesList