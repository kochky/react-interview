import React, { useEffect } from 'react';
import Filter from './Filter';
import Loading from './Loading';
import Error from './Error'
import MovieFlex from './MovieFlex';
import NoFilmFound from './NoFilmFound';
import { apiCallMovies } from '../constants/fetchMovies'
import { useSelector, useDispatch } from 'react-redux'


function MoviesList (){
    const dispatch = useDispatch()
    const props= useSelector(state=>state)

    useEffect(() => {
        if(!props.isLoaded){
            dispatch(apiCallMovies())
        }
    }, [])
    return (
        <div className="container">
            <h1 className="container__title">MOVIES</h1>
           {props.isLoaded && props.data.length>0 && <Filter/>}
            {props.error ? (
                <Error/>):(
                <div className="container__card-list">
                    {props.loading && (
                      <Loading />
                    )}
                    {(props.isLoaded && ((props.data.length>0  && !props.filterOn) || (props.filteredData.length>0 && props.filterOn)) )&&(
                       <MovieFlex />
                    )}
                    {(props.isLoaded && ((props.data.length===0 && !props.filterOn) || (props.filteredData.length===0 && props.filterOn)))&&(
                      <NoFilmFound/>
                    )}
                </div>)}
        </div>
    )
}

export default MoviesList