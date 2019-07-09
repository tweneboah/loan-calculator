import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './redux/reducers'
import App from './App';
import 'bootstrap/dist/css/'


// const store = createStore(users, composeWithDevTools(applyMiddleware(reduxThunk)) )
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxThunk)))

ReactDOM.render(
<Provider store = {store}>

  <App />

  </Provider>,
document.getElementById('root'));
