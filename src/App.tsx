import React from 'react';
import {Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import {Layout} from "./components/Layout/Layout";
import {Home} from "./pages/Home/Home";
import {User} from "./pages/User/User";


export const App = () => {
    return (
        <div className="App">
            <Layout>
                <Switch>
                    <Route path='/' component={Home} exact/>
                    <Route path='/user'>
                        {false ? <Redirect to="/" /> : <User/>}
                    </Route>
                </Switch>
            </Layout>
        </div>
    );
}

