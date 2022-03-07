import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setFilmsListOther } from "../redux/filmOtherWaySlice";
import FilmListOtherWay from "./FilmListOtherWay";

const FilmsOtherWay = () => {

    //i need the dispatch to connect api data and redux store
    const {filmsOtherWay: films} = useSelector(state => state.filmsListOtherWay)
    // console.log('films in store', films);
    const dispatch = useDispatch()
    const BASE_URL = "https://api.themoviedb.org/3/movie"
        const API_KEY = "58d3fba38236457578d2c5eb8f45eb56"

    const fetchFilmsOtherWay = async() => {
        const res = await axios.get(`${BASE_URL}/popular?api_key=${API_KEY}&language=en-US&page=1`)
        .catch((err) => {
            console.log(err);
        })
        //i use disptach here to connecting
            //inside dispatch i call the reducer name from my slice
        dispatch(setFilmsListOther(res.data.results)) // after that i need use selector for fill store
        // console.log('res fil', res.data.results);
    }

    useEffect(() => {
        fetchFilmsOtherWay()
    }, [])


    return ( 

        <div className="contianer">
        <div className="row">
      {films.map((film, index)=> (
        <FilmListOtherWay key={index} film={film} />
      ))}
        </div>
    </div>
     );
}
 
export default FilmsOtherWay;