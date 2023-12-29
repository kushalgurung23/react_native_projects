import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../state/store";

interface Nav {
    origin: string | null,
    destination: string | null,
    travelTimeInformation: Date | null
}

const initialState:Nav = {
    origin: null,
    destination: null,
    travelTimeInformation: null
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload
        },
        setDestination: (state, action) => {
            state.destination = action.payload
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload
        }
    }
})

export default navSlice.reducer
export const {setOrigin, setDestination, setTravelTimeInformation} = navSlice.actions

// SELECTORS
export const selectOrigin = (state:RootState) => state.nav.origin
export const selectDestination = (state:RootState) => state.nav.destination
export const selectTravelTimeInformation = (state:RootState) => state.nav.travelTimeInformation