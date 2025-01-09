import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    isAuthenticated: false,
    isLoding : false,
    user : null,
}

export const registerUser = createAsyncThunk("auth/register", async (formData, { rejectWithValue }) => {
    try {
      console.log("Calling register user API...");
      const response = await axios.post("http://localhost:5000/api/auth/register", formData, {
        withCredentials: true, 
      });
      console.log("Response data:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error registering user:", error.response?.data || error.message);
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  });

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setuser : (state , action) => {

        },
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            state.isLoding = true
        }).addCase(registerUser.fulfilled, (state, action) => {
            state.isLoding = false
            state.user = action.payload
            state.isAuthenticated = false
        }).addCase(registerUser.rejected, (state, action) => {
            state.isLoding = false
            state.user = null
            state.isAuthenticated = false
        })
    }
})


export const {setuser} = authSlice.actions;
export default authSlice.reducer