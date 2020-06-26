import React from 'react';
import {Switch,Route} from 'react-router-dom'
import AddQuestion from './components/AddQuestion';
import './App.css';

function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path="/" >
          <div>Root path</div>
        </Route>
        <Route path='/question/add'>
          <AddQuestion />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
