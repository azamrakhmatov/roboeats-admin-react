import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector
} from "react-redux";
import type { AppDispatch, RootState } from "@/redux";

export const useReduxDispatch = () => useDispatch<AppDispatch>();

export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;
