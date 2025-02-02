import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { ExcalidrawProps } from "@excalidraw/excalidraw/types/types";
// import type { RootState } from "@/lib/store";

const initialState: ExcalidrawProps = {};

export const excalidrawSlice = createSlice({
  name: "excalidraw",
  initialState,
  reducers: {
    setExcalidrawAPI: (state, action) => {
        console.log(action.payload);
        state = {...action.payload};
    }
  },
});

export const { setExcalidrawAPI } = excalidrawSlice.actions;
export default excalidrawSlice.reducer;
