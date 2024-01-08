import { configureStore } from "@reduxjs/toolkit";
import userDetails  from "../slices/useDetailsSlice";

export const store = configureStore({
    reducer: {
        users: userDetails
    }
})