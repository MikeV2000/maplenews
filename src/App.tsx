import React from 'react';
import {Weather} from './Weather';
import {Header} from 'semantic-ui-react';

function App() {

  return (
    <div className="App">
      <Header>
        Maple News Network
      </Header>
      <Weather />
    </div>
  );
}

export default App;
