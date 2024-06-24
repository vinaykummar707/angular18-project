import { createReducer, on } from "@ngrx/store";
import { incrementCounter } from "./counter.actions";

const initialValue = 0;

export const counterReducer = createReducer(
    initialValue,
    on(incrementCounter, (state) => state + 1)
)