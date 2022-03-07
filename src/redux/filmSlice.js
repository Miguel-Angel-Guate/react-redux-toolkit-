import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
// import { useEffect } from 'react'

const initialState = { films: []}

const filmSlice = createSlice({
    name: 'filmsList',
    initialState,
    reducers: {
        setFilmsList(state, action) {
            state.films = action.payload
        }
    }
})
//here i export the name of action
export const {setFilmsList} = filmSlice.actions
//here i export the reducer name
export default filmSlice.reducer

export const fetchAllFilms = async(dispatch) => {
        const BASE_URL = "https://api.themoviedb.org/3/movie"
        const API_KEY = "58d3fba38236457578d2c5eb8f45eb56"

    const response = await axios.get(`${BASE_URL}/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
    .catch((err) => {
        console.log(err);
    })
   dispatch(setFilmsList(response.data.results))
}