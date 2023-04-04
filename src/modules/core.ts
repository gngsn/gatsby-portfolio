import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CoreState {
    size: string;
    lang: string;
    projects: Array<Object>;
};

const initialState: CoreState = {
    size: 'md',
    lang: 'en',
    projects: []
};

const coreSlice = createSlice({
    name: 'core',
    initialState,
    reducers: {
        setLang(state, action: PayloadAction<{
                lang: string
            }>) {
            state.lang = action.payload.lang;
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