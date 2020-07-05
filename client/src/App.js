import React, {useEffect} from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';
import {getPosts} from './actions/post';

import Post from './components/posts/Post';

const App = () => {
  useEffect(() => {
    store.dispatch(getPosts());
  }, [getPosts]);
  
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Microsposts</h1>
        <Post />
      </div>
    </Provider>
  );
}

export default App;
