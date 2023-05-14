import { createSlice } from '@reduxjs/toolkit';
import userContacts from '../data/contacts.json';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: userContacts,
  reducers: {
    addContact(state, actoin) {
      state.unshift(actoin.payload);
    },
    deleteContact(state, actoin) {
      return state.filter(el => el.id !== actoin.payload);
    },
  },
});

export const contactsReduser = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
