import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "@redux-devtools/extension";

import rootReducer, { RootState } from "../../modules";
import Header from "./Header";
import Cursor from "./Cursor";
import Metadata from "./Metadata";
import { configureStore } from "@reduxjs/toolkit";

const isBrowser = typeof window !== "undefined";
let store = configureStore({
    reducer: rootReducer
});

if (isBrowser) {
    document.cookie = "cross-site-cookie=bar; SameSite=None; Secure";
}

interface ContextProviderProps {
    children: React.ReactNode;
};


const isMobile = () => {
    const ua = navigator.userAgent;
    return /Android|Mobi/i.test(ua);
};

declare global {
    interface Window {
        __REDUX_STATE__: RootState;
    }
}

const ContextProvider = ({ children }: ContextProviderProps) => {
    return (
        <Provider store={store}>
            <Metadata />
                <Header />
                <div>
                    {children}
                </div>
                {
                    typeof navigator !== 'undefined' && isMobile() ? 
                    null : <Cursor />
                }
        </Provider>
    );
};

export default ContextProvider;