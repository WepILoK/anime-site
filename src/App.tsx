import React from 'react';
import {Redirect, Route, Switch } from 'react-router-dom';

import {Layout} from "./components/Layout/Layout";
import {Home} from "./pages/Home/Home";
import {User} from "./pages/User/User";
import {AuthRoutes, HomeRoutes} from "./routes";

import './App.scss';
import {Authorization} from "./pages/Authorization/Authorization";
import {useSelector} from "react-redux";
import {selectIsAuth} from "./store/ducks/user/selectors";


export const App = () => {
    const isAuth = useSelector(selectIsAuth)

    return (
        <div className="App">
            <Layout>
                <Switch>
                    <Route path={HomeRoutes.ROOT} component={Home} exact/>
                    <Route path={AuthRoutes.AUTH}>
                        {isAuth ? <Redirect to={HomeRoutes.ROOT}/> : <Authorization/>}
                    </Route>
                    <Route path={HomeRoutes.USER}>
                        {isAuth ? <User/> : <Redirect to={HomeRoutes.ROOT} />}
                    </Route>
                </Switch>
            </Layout>
        </div>
    );
}

