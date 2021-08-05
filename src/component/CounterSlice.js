import { createSlice } from "@reduxjs/toolkit";


export const CounterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 1
    },
    reducers: {
        increment: (state) => {
            console.log(state.value);
            state.value += 1;
        },
        decrement: (state) => {
            if (state.value < 1) {
                state.value = 0;
            } else {
                state.value -= 1;
            }
        },
        incrementByValue: (state, action) => {
            state.value += action.payload;
        }

    }
});

export const { increment, decrement, incrementByValue } = CounterSlice.actions;

export const selectCount = state => state.counter.value;

export default CounterSlice.reducer;