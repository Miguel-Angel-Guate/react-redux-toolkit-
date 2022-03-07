import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = { list: []}

const userSlice = createSlice({
    //this state will import in useSelector(users)
    name: 'users',
    initialState,
    reducers: {
        setUserList(state, action){
            state.list = action.payload
        }
    },
  })

export const {setUserList} = userSlice.actions
export default userSlice.reducer
export const fetchAllUsers = async (dispatch) =>  {
    const response = await axios.get('https://reqres.in/api/users?per_page=12')
    .catch((err) => {
        console.log(err);
    })
    dispatch(setUserList(response.data.data))
}