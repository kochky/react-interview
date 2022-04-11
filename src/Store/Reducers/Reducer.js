import {LOAD_MOVIES, LOAD_MOVIES_SUCCES, LOAD_MOVIES_ERROR, ADD_LIKE, ADD_DISLIKE, DELETE_MOVIE, FILTER_MOVIE, SET_EL_PER_PAGE, SET_CURRENT_PAGE} from "../../constants/actionsType"


function initialState () {
    return {
        loading:false,
        error:false,
        isLoaded:false,
        data:[],
        filterOn:false,
        filteredData:[],
        elementsPerPage:4,
        currentPage:1,
        numberOfPages:1,
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
                numberOfPages:Math.ceil(action.payload.length/state.elementsPerPage)
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
            return Object.assign({},state)
            
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
            return Object.assign({},state)
       
        case DELETE_MOVIE:
            let totalPages=1
            {state.filterOn ? totalPages=Math.ceil(state.filteredData.length/state.elementsPerPage): totalPages=Math.ceil(state.data.length/state.elementsPerPage)} 
            return {
                ...state,
                data:state.data.filter((movie)=>movie.id !== action.id),
                filteredData:state.filteredData.filter((movie)=>movie.id !== action.id),
                numberOfPages:totalPages

            }
       
        case FILTER_MOVIE:
            let verifyCurrentPage=state.currentPage
            if(action.payload.length>0){
                let newDataArray=[]
                state.data.map(movie=>action.payload.toString().includes(movie.category)&& newDataArray.push(movie))
                {state.currentPage>Math.ceil(newDataArray.length/state.elementsPerPage) ? verifyCurrentPage=1: verifyCurrentPage=state.currentPage}
                return {
                    ...state,
                    filterOn:true,
                    filteredData:newDataArray,
                    numberOfPages:Math.ceil(newDataArray.length/state.elementsPerPage),
                    currentPage:verifyCurrentPage
                }
            }else {
                {state.currentPage>Math.ceil(state.data.length/state.elementsPerPage) ? verifyCurrentPage=1: verifyCurrentPage=state.currentPage}
                return {
                    ...state,
                    filterOn:false,
                    filteredData:[],
                    numberOfPages:Math.ceil(state.data.length/state.elementsPerPage),
                    currentPage:verifyCurrentPage

                }
            }
        case SET_EL_PER_PAGE:
            if(state.filterOn){
                const totalPages=Math.ceil(state.filteredData.length/action.payload)
            return{
                ...state,
                elementsPerPage:action.payload,
                numberOfPages: totalPages,
                currentPage:1
            }
            }else {
                const totalPages=Math.ceil(state.data.length/action.payload)
                return{
                    ...state,
                    elementsPerPage:action.payload,
                    numberOfPages: totalPages,
                    currentPage:1
                }            
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage:action.payload
            }
            
        default:
            return state
    }
}

export default moviesData