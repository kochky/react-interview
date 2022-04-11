import React, { useEffect, useRef } from 'react';
import Filter from './Filter';
import Loading from './Loading';
import Error from './Error'
import ElementPersPage from './ElementPerPage'
import MovieFlex from './MovieFlex';
import NoFilmFound from './NoFilmFound';
import { apiCallMovies } from '../constants/fetchMovies'
import { useSelector, useDispatch } from 'react-redux'
import PaginationMovie from './Pagination';


function MoviesList (){
    const dispatch = useDispatch()
    const props= useSelector(state=>state)

    //En changeant de page, la vue remonte en haut de la liste des films sur mobile/tablette
    const scrollRef = useRef(null);
    const scrollToElement = () => window.innerWidth <650 && scrollRef.current.scrollIntoView();

    useEffect(() => {
        if(!props.isLoaded){
            dispatch(apiCallMovies())
        }
    }, [])
    return (
        <div ref={scrollRef} className="container">
            <h1 className="container__title">MOVIES</h1>
           {props.isLoaded && props.data.length>0 && <div className="container__inputs"><Filter/> <ElementPersPage/></div>}
            {props.error ? (
                <Error/>):(
                <div  className="container__card-list">
                    {props.loading && (
                      <Loading />
                    )}
                    {(props.isLoaded && ((props.data.length>0  && !props.filterOn) || (props.filteredData.length>0 && props.filterOn)) )&&(
                       <>
                       <MovieFlex />
                       <PaginationMovie scrollToElement={scrollToElement}/>
                       </>

                    )}
                    {(props.isLoaded && ((props.data.length===0 && !props.filterOn) || (props.filteredData.length===0 && props.filterOn)))&&(
                      <NoFilmFound/>
                    )}
                </div>)}
        </div>
    )
}

export default MoviesList