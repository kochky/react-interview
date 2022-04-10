import {movies$} from "../ressources/movies"
import {loadMovies, loadMoviesSucces, loadMoviesError} from './actions'


export const apiCallMovies = () => {
    return (dispatch)=> {
        dispatch(loadMovies())
        movies$
        .then(result=> (dispatch(loadMoviesSucces(result))
        ))
        .catch(err=> dispatch(loadMoviesError("Erreur lors de la récupération des données")) )
    }
}
