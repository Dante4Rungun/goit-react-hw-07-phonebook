import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";


const handlePending = (state) => {
  state.isLoading = true
}

const handleRejecting = (state, action) => {
  state.isLoading = false
  state.error = action.payload
}

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false
      state.error = null
      state.items = action.payload
    },
    [fetchContacts.rejected]: handleRejecting,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false
      state.error = null
      state.items.push(action.payload)
    },
    [addContact.rejected]: handleRejecting,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false
      state.error = null
      console.log(action.payload)
      const index = state.items.findIndex(contact => contact.id === action.payload.id)
      state.items.splice(index, 1)
    },
    [deleteContact.rejected]: handleRejecting
  }
})

//export const { fetchingInProgress, fetchingSuccess, fetchingError} = contactsSlice.actions
export const contactsReducer = contactsSlice.reducer