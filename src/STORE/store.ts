import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./Slice/Movies";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { MoviesState } from "../types/movie";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

export type RootState = {
  movies: MoviesState;
};

export type AppDispatch = typeof store.dispatch;

export default store;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
