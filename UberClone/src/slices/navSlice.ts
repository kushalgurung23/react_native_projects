import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../state/store";

interface Nav {
    origin: {
        location: {
            lat: number,
            lon: number
        },
        description: string | null
    },
    destination: {
        location: {
            lat: number,
            lon: number
        },
        description: string | null
    } | null,
    travelTimeInformation: {
        distance: {
            text: string 
        },
        duration: {
            text: string,
            value: number
        }
    } | null
}

const initialState: Nav = {
  origin: {
    location: {
      lat: 22.3193,
      lon: 114.1694,
    },
    description: 'Mong Kok, the heart of Hong Kong',
  },
  destination: {
    location: {
      lat: 22.3578,
      lon: 114.1298,
    },
    description: 'Kwai Fong, the place in Hong Kong where people love to work',
  },
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

export default navSlice.reducer
export const {setOrigin, setDestination, setTravelTimeInformation} = navSlice.actions

// SELECTORS
export const selectOrigin = (state:RootState) => state.nav.origin
export const selectDestination = (state:RootState) => state.nav.destination
export const selectTravelTimeInformation = (state:RootState) => state.nav.travelTimeInformation