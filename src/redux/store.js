import { configureStore } from "@reduxjs/toolkit";
import filmOtherWaySlice from "./filmOtherWaySlice";
import filmList from "./filmSlice";
import userOtherWaySlice from "./userOtherWaySlice";
import users from './userSlice'


export const store = configureStore({
    reducer: {
        users,
        filmList,
        usersOtherWay: userOtherWaySlice,
        filmsListOtherWay: filmOtherWaySlice


    }
})