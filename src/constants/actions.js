import { LOAD_MOVIES, LOAD_MOVIES_SUCCES, LOAD_MOVIES_ERROR, ADD_LIKE, REMOVE_LIKE, ADD_DISLIKE,REMOVE_DISLIKE } from "./actionsType"

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