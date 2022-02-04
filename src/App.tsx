import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import {store} from "./redux/ReduxStore";
import {MainComponentsContainer} from "./components/main/MainComponentsContainer";

const App: React.FC =() => {
    return (
        <Provider store={store}>
        <MainComponentsContainer />
        </Provider>
    );
}

export default App;
