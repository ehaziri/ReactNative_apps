import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

const App = () => {
  useEffect(() => {
    const config = {
      apiKey: 'AIzaSyDzeQyeeCSyV9B-aetEFLhTVBAzPMRgvWY',
      authDomain: 'myreactproject-b075c.firebaseapp.com',
      databaseURL: 'https://myreactproject-b075c.firebaseio.com',
      projectId: 'myreactproject-b075c',
      storageBucket: 'myreactproject-b075c.appspot.com',
      messagingSenderId: '529156635853'
    };
    firebase.initializeApp(config);
  })
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider> 
    );

}

export default App;

