import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import SEO from "../seo";

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

const client = new ApolloClient({
    uri: 'http://localhost:8000/___graphql',
    cache: new InMemoryCache()
});

const ContextProvider = ({ children }: ContextProviderProps) => {
    return (
        <Provider store={store}>
            <ApolloProvider client={client}>
                <SEO/>
                <Header />
                {children}
            </ApolloProvider>
        </Provider>
    );
};

export default ContextProvider;