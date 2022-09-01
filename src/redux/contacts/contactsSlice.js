// import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: [],
//     filter: '',
//   },
//   reducers: {
//     addContact(state, action) {
//       state.items.push(action.payload);
//     },
//     removeContact(state, action) {
//       state.items = state.items.filter(item => item.id !== action.payload);
//     },
//     filteredContactsList(state, action) {
//       state.filter = action.payload;
//     },
//   },
// });
// export const { addContact, removeContact, filteredContactsList } =
//   contactsSlice.actions;

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

// export const persistedAddContactReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );
