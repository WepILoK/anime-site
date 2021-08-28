import React, {useEffect} from 'react';
import {Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import {Layout} from "./components/Layout/Layout";
import {Home} from "./pages/Home/Home";
import {User} from "./pages/User/User";
import {HomeRoutes} from "./routes";
import {useDispatch} from "react-redux";
import {fetchAnimeLists} from "./store/ducks/animeLists/actionCreators";


export const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAnimeLists())
    }, [])

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

