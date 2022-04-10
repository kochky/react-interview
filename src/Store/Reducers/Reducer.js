import {LOAD_MOVIES, LOAD_MOVIES_SUCCES, LOAD_MOVIES_ERROR, ADD_LIKE, REMOVE_LIKE, ADD_DISLIKE,REMOVE_DISLIKE} from "../../constants/actionsType"


function initialState () {
    return {
        loading:false,
        error:false,
        isLoaded:false,
        data:[]
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
                isLoaded:true
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
            likedMovieIndex.likes ++
          return Object.assign({},state,likedMovieIndex)
        
        case REMOVE_LIKE: 
            return{

            }
        case ADD_DISLIKE:
            return {

            }
        case REMOVE_DISLIKE:
            return {

            }
        default:
            return state
    }
}

export default moviesData