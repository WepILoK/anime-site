import React, {useEffect} from 'react';
import {Redirect, Route, Switch } from 'react-router-dom';

import {Layout} from "./components/Layout/Layout";
import {Home} from "./pages/Home/Home";
import {User} from "./pages/User/User";
import {AuthRoutes, HomeRoutes} from "./routes";

import './App.scss';
import {Authorization} from "./pages/Authorization/Authorization";
import {useDispatch, useSelector} from "react-redux";
import {selectIsAuth} from "./store/ducks/user/selectors";
import {fetchUserData} from "./store/ducks/user/actionCreators";
import {AnotherUser} from "./pages/AnotherUser/AnotherUser";


export const App = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector(selectIsAuth)

    useEffect( () => {
        dispatch(fetchUserData())
    }, [])
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
                    <Route path={HomeRoutes.ANOTHER_USER + ':id'} component={AnotherUser}/>
                    <Route path='*'>
                        <div>404</div>
                    </Route>
                </Switch>
            </Layout>
        </div>
    );
}
