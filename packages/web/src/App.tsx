import React from 'react';
import {Home} from './pages';
import {Grid, Menu} from 'semantic-ui-react';
import {environment} from './core/environment';

function App() {

  return (
    <div className="App">
      <Menu inverted attached>
        <Menu.Item>
          {environment.siteTitle}
        </Menu.Item>
        <Menu.Item position="right">
          {environment.location}
        </Menu.Item>
      </Menu>
      <Grid padded stackable stretched>
        <Home />
      </Grid>
    </div>
  );
}

export default App;
