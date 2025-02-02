import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import { appSlice } from "../slices/app.slices";
import { excalidrawSlice } from "@/slices/excalidraw.slices";

const rootReducers = {
  // [appSlice.name]: appSlice.reducer,
  [excalidrawSlice.name]: excalidrawSlice.reducer
};

// const makeStore = () => {
//   return configureStore({
//     reducer: rootReducers,
//     devTools: true,
//   });
// } 

export const store = configureStore({
  reducer: rootReducers,
  devTools: true,
});

// export type AppStore = ReturnType<typeof makeStore>;

// infer RootState 
// export type RootState = ReturnType<AppStore["getState"]>;
// export type AppDispatch = AppStore['dispatch']
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
