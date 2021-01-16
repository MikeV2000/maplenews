import React from 'react';
import {Grid} from 'semantic-ui-react';
import {MainMenu} from "./components/layout";
import {Routes} from "./core/routes";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "./pages";

function App() {

  return (
    <div className="App">
        <BrowserRouter>
            <MainMenu routes={Routes}/>
            <Switch>
                {Routes.map(route => {
                    return (
                        <Route path={route.path}>
                            <Grid padded stackable stretched>
                                {route.page()}
                            </Grid>
                        </Route>
                    );
                })}
                <Route path='/'>
                    <Grid padded stackable stretched>
                        <Home />
                    </Grid>
                </Route>
            </Switch>
        </BrowserRouter>
    </div>
    );
}

export default App;
