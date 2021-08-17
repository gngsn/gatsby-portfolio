import React, { useState } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
} from "@apollo/client";

import rootReducer, { RootState } from "../../modules";
import Header from "./Header";

interface ContextProviderProps {
    children: React.ReactNode;
};

interface ContextValue {
    value: number;
    set(value: number): void;
}

const MainContext = React.createContext<ContextValue>({
    value: 0,
    set: () => { },
});

declare global {
    interface Window {
        __REDUX_STATE__: RootState;
    }
}

const store = createStore(
    rootReducer,
    window.__REDUX_STATE__,
    composeWithDevTools(),
);

const client = new ApolloClient({
    uri: 'http://localhost:8000/___graphql',
    cache: new InMemoryCache()
});

const ContextProvider = ({ children }: ContextProviderProps) => {
    const [value, setValue] = useState(0);

    return (
        <Provider store={store}>
            <ApolloProvider client={client}>
                {/* <MainContext.Provider
                    value={{
                        value,
                        set: setValue,
                    }}
                > */}
                <Header />
                {children}
                {/* </MainContext.Provider> */}
            </ApolloProvider>
        </Provider>
    );
};

export default ContextProvider;