import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import rootReducer, { RootState } from "../../modules";
import Header from "./Header";
import Cursor from "./Cursor";

const isBrowser = typeof window !== "undefined";
let store = createStore(
    rootReducer,
    composeWithDevTools(),
);

if (isBrowser) {
    document.cookie = "cross-site-cookie=bar; SameSite=None; Secure";
    store = createStore(
        rootReducer,
        window.__REDUX_STATE__,
        composeWithDevTools(),
    );
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
                <Header />
                {
                    typeof navigator !== 'undefined' && isMobile() ? 
                    null : <Cursor />
                }
                
                {children}
        </Provider>
    );
};

export default ContextProvider;