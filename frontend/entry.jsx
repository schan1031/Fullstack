import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root.jsx';
import { fetchAllContests, submitContest } from './actions/contest_actions';



document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);


  // TESTING
  const testcon = {creator_id: 1,
    max_contestants: 10,
    point_value: 50,
    name: 'testcontest2',
    contest_date: new Date(2017, 8, 8)
  };

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.fetchAllContests = fetchAllContests;
  window.submitContest = submitContest;
  window.testcon = testcon;
});
