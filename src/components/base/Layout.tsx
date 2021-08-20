import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import rootReducer, { RootState } from "../../modules";
import Header from "./Header";

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

declare global {
    interface Window {
        __REDUX_STATE__: RootState;
    }
}

const ContextProvider = ({ children }: ContextProviderProps) => {
    return (
        <Provider store={store}>
                <Header />
                {children}
        </Provider>
    );
};

export default ContextProvider;