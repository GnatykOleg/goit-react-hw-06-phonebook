import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from 'redux/contacts/contactsSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const contactsPersistConfig = {
  key: 'Contacts',
  storage,
  blacklist: ['filter', '_persist'],
};

export const store = configureStore({
  reducer: { contacts: persistReducer(contactsPersistConfig, contactsSlice) },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
