import {createSlice, configureStore} from "@reduxjs/toolkit";

const contactSlice = createSlice({
    name:'counter',
    initialState: {
        contacts:[],
        loading:false,
        error:false,
},
reducers:{
    fetchContactsLoading: (state, action) =>{
        state.loading = true;
        state.loading = false;
    },
    fetchContactsSuccess: (state, action) =>{
        state.contacts = state.payload;
        state.loading = false;
        state.loading = false;
},
    fetchContactsError : ( state, action)=>{
        return ({
            ...state,
            loading: false,
            error:true,
        });
    },
}
})
export const {fetchContactsLoading,fetchContactsSuccess,fetchContactsError} = contactSlice.actions;
export default Store = configureStore({
    reducer: contactSlice.reducer,
})