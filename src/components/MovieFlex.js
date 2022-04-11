import React from 'react';
import { useSelector } from 'react-redux'

import Card from '@mui/material/Card';
import ImgMediaCard from "./Card"



function MovieFlex(){
    const props= useSelector(state=>state)

    const sliceBegin= props.currentPage*props.elementsPerPage-props.elementsPerPage
    const sliceEnd= props.currentPage*props.elementsPerPage
    return (
        <div className="container__card-list__elements">
            {props.isLoaded && !props.filterOn && props.data.slice(sliceBegin,sliceEnd).map(movie=><ImgMediaCard key={movie.id} id={movie.id} />)}
            {props.isLoaded && props.filterOn && props.filteredData.slice(sliceBegin,sliceEnd).map(movie=><ImgMediaCard key={movie.id} id={movie.id} />)}
            <div className="card-wrapper card__invisible" key={"invisible-1"}><Card className="card" /></div>
            <div className="card-wrapper card__invisible" key={'invisble-2'}><Card className="card" /></div>
            <div className="card-wrapper card__invisible" key={'invisble-3'}><Card className="card" /></div>
            <div className="card-wrapper card__invisible" key={'invisble-4'}><Card className="card" /></div>
        </div>
        )
}

export default MovieFlex