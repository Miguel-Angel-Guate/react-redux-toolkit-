import { createSlice } from '@reduxjs/toolkit'

const initialState = { filmsOtherWay: []}

const filmSliceOtherWay = createSlice({
    name: 'filmsListOtherWay',
    initialState,
    reducers: {
        setFilmsListOther(state, action) {
            state.filmsOtherWay = action.payload
        }
    }
})
//here i export the name of action
export const {setFilmsListOther} = filmSliceOtherWay.actions
//here i export the reducer name
export default filmSliceOtherWay.reducer
