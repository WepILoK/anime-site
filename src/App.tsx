import React from 'react';
import {Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import {Layout} from "./components/Layout/Layout";
import {Home} from "./pages/Home/Home";
import {User} from "./pages/User/User";
import {HomeRoutes} from "./routes";


export const App = () => {
    return (
        <div className="App">
            <Layout>
                <Switch>
                    <Route path={HomeRoutes.ROOT} component={Home} exact/>
                    <Route path={HomeRoutes.USER}>
                        {false ? <Redirect to={HomeRoutes.ROOT} /> : <User/>}
                    </Route>
                </Switch>
            </Layout>
        </div>
    );
}

