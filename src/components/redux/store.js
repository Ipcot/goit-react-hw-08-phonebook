import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

const increment = createAction('myValue/increment');
console.log(increment(100));

const myReducer = createReducer(0, {});

export const store = configureStore({
  reducer: {
    myValue: myReducer,
  },
});
