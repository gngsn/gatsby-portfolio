import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CoreState {
    size: string;
    theme: string;
    projects: Array<Object>;
};

const initialState: CoreState = {
    size: 'md',
    theme: 'light',
    projects: []
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
        },
        setProjects(state,
            action: PayloadAction<{
                projects: Array<Object>
            }>) {
            state.projects = action.payload.projects;
        },
    },
});

export const coreActions = coreSlice.actions;
export default coreSlice;