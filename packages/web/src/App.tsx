import React from 'react';
import {Weather} from './Weather';
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
        <Weather />
      </Grid>
    </div>
  );
}

export default App;
