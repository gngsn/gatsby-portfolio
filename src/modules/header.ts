import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface HeaderState {
    menu: string;
}

export const initialState: HeaderState = {
    menu: 'HOME',
};

const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        setMenu(
            state,
            action: PayloadAction<string>,
        ) {
            state.menu = action.payload;
        },
        leaveUser(state) {
            state.menu = initialState.menu;
        },
    },
});

export const headerActions = headerSlice.actions;
export default headerSlice;