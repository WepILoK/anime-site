import React from 'react';
import {Route, Switch } from 'react-router-dom';
import './App.scss';
import {Layout} from "./components/Layout/Layout";
import {Home} from "./pages/Home/Home";
import {Profile} from "./pages/Profile/Profile";


export const App = () => {
    return (
        <div className="App">
            <Layout>
                <Switch>
                    <Route path='/' component={Home} exact/>
                    <Route path='/profile' component={Profile}/>
                </Switch>
            </Layout>
        </div>
    );
}

