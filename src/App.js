import React from 'react';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

class App extends React.Component {
  render() {
    return(
      <BrowserRouter >
        <Routes />
      </BrowserRouter>
    )
  }
}

export default App;
