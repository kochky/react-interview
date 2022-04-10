import React, { useState,useEffect } from 'react';
import ImgMediaCard from "./Card"
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import { connect } from "react-redux";
import { apiCallMovies } from '../constants/fetchMovies'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { addLike } from "../constants/actions"

function MoviesList (state){
    useEffect(() => {
        if(state.data.length===0){
            state.apiData()
        }
    }, [])
  
    return (
        <div className="container">
            <h1 className="container__title">Movies</h1>
            <div className="container__filter"></div>
            {state.error ? (
                <div className="error-container"><ErrorOutlineIcon fontSize="large"/><p>{state.error}</p><p>Veuillez réactualiser la page</p></div>):(
                <div className="container__card-list">
                    {state.loading && (
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
                    {state.isLoaded &&(
                        state.data.map(movie=>(<ImgMediaCard  key={movie.id} data={movie} />)
                    ))}
                </div>)}
        </div>
    )
}

const mapStateToProps= state => { 
    return state
}

const mapDispatchToProps= dispatch=>{
  return {
    apiData:()=>dispatch(apiCallMovies()),
  }
}

export default  connect(mapStateToProps,mapDispatchToProps)(MoviesList)