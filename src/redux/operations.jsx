import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://63405aa4e44b83bc73cef199.mockapi.io/api/v1/"

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const responde = await axios.get("/contacts")
        return responde.data
    }
    catch (err) {
        return thunkAPI.rejectWithValue(err.message)
    }
})

export const addContact = createAsyncThunk(
    "contacts/addContacts",
    async (infoObj , thunkAPI) => {
        try {
            const response = await axios.post("/contacts", infoObj)
            return response.data
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message)
        }        
    }) 

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`)
            return response.data
        }
        catch (err) {
            return thunkAPI.rejectWithValue(err.message)
        }
    }
)
