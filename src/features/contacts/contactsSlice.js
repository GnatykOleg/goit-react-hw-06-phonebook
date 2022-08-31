import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContacts: (prevState, { payload }) => {
      prevState.contacts = [...prevState.contacts, payload];
    },
    deleteContacts: (prevState, { payload }) => {
      prevState.contacts = prevState.contacts.filter(
        contact => contact.id !== payload
      );
    },

    filterContacts: (prevState, { payload }) => {
      prevState.filter = payload;
    },
  },
});

export const { addContacts, deleteContacts, filterContacts } =
  contactsSlice.actions;

export default contactsSlice.reducer;
