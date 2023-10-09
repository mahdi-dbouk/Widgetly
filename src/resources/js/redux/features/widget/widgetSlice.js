import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    owner: '',
    repo: '',
    about: '',
    chartType: '',
    title: '',
    description: '',
    colors: []
}

const widgetSlice = createSlice({
    name: 'widget',
    initialState,
    reducers: {
        setWidgetState: (state, action) => {
            return action.payload;
        }
    }
})

export default widgetSlice.reducer;
export const {setWidgetState} = widgetSlice.actions;