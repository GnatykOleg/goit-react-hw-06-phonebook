import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContacts: (state, { payload }) => {
      state.contacts = [...state.contacts, payload];
    },
    deleteContacts: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },

    filterContacts: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { addContacts, deleteContacts, filterContacts } =
  contactsSlice.actions;

export default contactsSlice.reducer;
