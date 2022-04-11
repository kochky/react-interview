import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Card from '@mui/material/Card';
import ImgMediaCard from "./Card"



function MovieFlex(){
    const props= useSelector(state=>state)
    const dispatch = useDispatch()
 
    return (
        <>
       {props.isLoaded && !props.filterOn && props.data.map(movie=><ImgMediaCard key={movie.id} id={movie.id} />)}
       {props.isLoaded && props.filterOn && props.filteredData.map(movie=><ImgMediaCard key={movie.id} id={movie.id} />)}
        <div className="card-wrapper card__invisible" key={"invisible-1"}><Card className="card" /></div>
        <div className="card-wrapper card__invisible" key={'invisble-2'}><Card className="card" /></div>
        <div className="card-wrapper card__invisible" key={'invisble-3'}><Card className="card" /></div>
        <div className="card-wrapper card__invisible" key={'invisble-4'}><Card className="card" /></div>
        </>
        )
}

export default MovieFlex