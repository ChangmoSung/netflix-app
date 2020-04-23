import React, { Component } from 'react';
import Header from './Header';
import Catalogue from './Catalogue';
import MovieDetails from './MovieDetails'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
  }


render() { 
  return ( 
    <Router>
      <div className='App'>
        <Header />
        <Route path='/' exact component={Catalogue} />
        <Route path='/movie/:movieId' component={MovieDetails} />
      </div>
    </Router>
    );
  }
}
 
export default App;