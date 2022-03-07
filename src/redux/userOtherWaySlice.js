import { createSlice } from '@reduxjs/toolkit'

const initialState = { listOtherWay: []}

const userSliceOther = createSlice({
    //this state will import in useSelector(users)
    name: 'usersOtherWay',
    initialState,
    reducers: {
        setOtherWayUserList(state, action){
            state.listOtherWay = action.payload
        }
    },
  })

  export const {setOtherWayUserList} = userSliceOther.actions
export default userSliceOther.reducer