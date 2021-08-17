import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CoreState {
    size: string;
    theme: string;
};

const initialState: CoreState = {
    size: 'md',
    theme: 'light'
};


const coreSlice = createSlice({
    name: 'core',
    initialState,
    reducers: {
        setTheme(state,
            action: PayloadAction<{
                theme: string
            }>) {
            state.theme = action.payload.theme;
        }
    },
});

export const coreActions = coreSlice.actions;
export default coreSlice;