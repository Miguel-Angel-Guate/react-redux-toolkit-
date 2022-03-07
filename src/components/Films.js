import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllFilms } from "../redux/filmSlice";
import FilmList from "./FilmList";
import { useSelector } from "react-redux";

const Films = () => {
  const {films} = useSelector(state => state.filmList)// this filmList is the reducer name in store file. <<IMPORTANT>>
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllFilms)
    // fetchAllFilms()
  }, [dispatch])
    return (
        <div className="contianer">
            <div className="row">
          {films.map((film, index)=> (
            
            <FilmList key={index} film={film} />
          ))}
            </div>
        </div>
        
      );
}
 
export default Films;