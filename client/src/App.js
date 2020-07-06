import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';

import Posts from './components/posts/Posts';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
