import React from 'react';
import './App.scss';
import {Layout} from "./components/Layout/Layout";
import {Home} from "./pages/Home/Home";


export const App = () => {
    return (
        <div className="App">
            <Layout>
                <Home/>
            </Layout>
        </div>
    );
}

