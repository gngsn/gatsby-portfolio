import React from "react";
import { Provider } from "react-redux";

import { configureStore } from "@reduxjs/toolkit";
import rootReducer, { RootState } from "../../modules";
import Cursor from "./Cursor";
import Header from "./Header";
import Metadata from "./Metadata";

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