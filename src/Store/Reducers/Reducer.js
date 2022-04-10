import {LOAD_MOVIES, LOAD_MOVIES_SUCCES, LOAD_MOVIES_ERROR, ADD_LIKE, ADD_DISLIKE, RENDER, DELETE_MOVIE} from "../../constants/actionsType"


function initialState () {
    return {
        loading:false,
        error:false,
        isLoaded:false,
        data:[],
        render:false
    } 
}
function moviesData(state= initialState(),action){
    switch(action.type) {
        case LOAD_MOVIES:
            return {
                ...state,
                loading:true,
                error:false,
                isLoaded:false,
            }
        case LOAD_MOVIES_SUCCES:
            return {
                ...state,
                loading:false,
                error:false,
                data:action.payload,
                isLoaded:true,
                render:true,
            }
        case RENDER:
            return {
                ...state,
                render:false,
            }
        case LOAD_MOVIES_ERROR:
            return {
                ...state,
                loading:false,
                isLoaded:false,
                error:action.message,
            }
        case ADD_LIKE:
            let likedMovieIndex= state.data.find(movie=>movie.id===action.id)
            if(likedMovieIndex.liked !==true){
                likedMovieIndex.likes ++
                likedMovieIndex.liked=true
            }else {
                likedMovieIndex.likes --
                likedMovieIndex.liked=false
            }
            if(likedMovieIndex.disliked){
                likedMovieIndex.disliked=false
                likedMovieIndex.dislikes --
            }
            return Object.assign({},state,likedMovieIndex)
        case ADD_DISLIKE:
            let dislikedMovieIndex= state.data.find(movie=>movie.id===action.id)
            if(dislikedMovieIndex.disliked !==true){
                dislikedMovieIndex.dislikes ++
                dislikedMovieIndex.disliked=true
            }else {
                dislikedMovieIndex.dislikes --
                dislikedMovieIndex.disliked=false
            }
            if(dislikedMovieIndex.liked){
                dislikedMovieIndex.liked=false
                dislikedMovieIndex.likes --
            }
            return Object.assign({},state,dislikedMovieIndex)
       
        case DELETE_MOVIE: 
            return {
                ...state,
                //render:true,
                data:state.data.filter((movie)=>movie.id !== action.id)
            }
        default:
            return state
    }
}

export default moviesData