import React from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import {Home} from "./pages/Home/Home";


export const App = () => {
    return (
        <div className="App">
            <Header/>
            <div className='page'>
                <Home/>
            </div>
        </div>
    );
}

