import { LOAD_MOVIES, LOAD_MOVIES_SUCCES, LOAD_MOVIES_ERROR, ADD_LIKE, ADD_DISLIKE,DELETE_MOVIE, FILTER_MOVIE } from "./actionsType"

export const loadMovies= ()=> {
    return {
        type:LOAD_MOVIES
    }
}

export const loadMoviesSucces= (movieList) => {
    return {
        type:LOAD_MOVIES_SUCCES,
        payload:movieList
    }
}

export const loadMoviesError= (error)=>{
    return {
        type:LOAD_MOVIES_ERROR,
        message:error
    }
}

export const addLike=(id) => {
    return {
        type:ADD_LIKE,
        id:id,
    }
}

export const addDislike=(id) => {
    
    return {
        type:ADD_DISLIKE,
        id:id,
    }
}

export const deleteMovie=(id)=>{
    return {
        type:DELETE_MOVIE,
        id:id,
    }
}

export const filterMovie=(filter)=>{
    return {
        type:FILTER_MOVIE,
        payload:filter,
    }
}

