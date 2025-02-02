import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// https://blog.logrocket.com/using-typescript-redux-toolkit/#configuring-store-configurestore

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// export const useAppStore = () => useStore<() => AppStore>();