import React from 'react';
import {Home} from './pages';
import {Grid} from 'semantic-ui-react';
import {MainMenu} from "./components/layout";
import {Routes} from "./core/routes";

function App() {

  return (
    <div className="App">
        <MainMenu routes={Routes}/>
        <Grid padded stackable stretched>
            <Home />
        </Grid>
    </div>
    );
}

export default App;
