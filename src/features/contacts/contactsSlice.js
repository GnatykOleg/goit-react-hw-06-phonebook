import { createSlice } from '@reduxjs/toolkit';
import shortid from 'shortid';

const initialState = {
  contacts: [],
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContacts: (state, { payload }) => {
      const newContactName = payload.name.toLowerCase();

      if (state.contacts.some(el => el.name.toLowerCase() === newContactName)) {
        alert(`${payload.name} is already in contacts`);
      } else {
        const newContact = {
          id: shortid(),
          ...payload,
        };
        state.contacts = [...state.contacts, newContact];
      }
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
