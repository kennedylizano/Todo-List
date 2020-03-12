import React from 'react';

import './App.css';
import Home from './Home';
import Number4 from './number4';
import Hello from './Hello';
import {Router} from '@reach/router';
function App() {

  return (
    <div className="App">
        <Router>
            <Number4 path="/number4"/>
            <Home path="/Home"/>
            <Hello path="/Hello" />
        </Router>

    </div>
  );
}

export default App;
