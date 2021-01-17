import React from 'react';
import {Grid} from 'semantic-ui-react';
import {MainMenu} from "./components/layout";
import {Routes} from "./core/routes";
import {BrowserRouter, Route as BrowserRoute, Switch} from "react-router-dom";
import {Home} from "./pages";
import type {Route} from "./types";

function App() {

  return (
    <div className="App">
        <BrowserRouter>
            <MainMenu routes={Routes}/>
            <Switch>
                {Routes.map((route: Route) => {
                    return (
                        <BrowserRoute path={route.path} key={route.path}>
                            <Grid padded stackable stretched>
                                {route.page()}
                            </Grid>
                        </BrowserRoute>
                    );
                })}
                <BrowserRoute path='/'>
                    <Grid padded stackable stretched>
                        <Home />
                    </Grid>
                </BrowserRoute>
            </Switch>
        </BrowserRouter>
    </div>
    );
}

export default App;
