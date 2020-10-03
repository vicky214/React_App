import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import authReducer from './reducer/authReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { persistStore,persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import createEncryptor from 'redux-persist-transform-encrypt'

const encryptor = createEncryptor({
  secretKey: 'my-super-secret-key',
  onError: function(error) {
    console.log(error)
  }
})

const persistConfig = {
	key: "root",
  storage,
  transforms: [encryptor]
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const mainReducer = combineReducers({
  auth:authReducer
  // log:LogReducer
})

const persistedReducer = persistReducer(persistConfig,mainReducer)

const store = createStore(persistedReducer,composeEnhancers(applyMiddleware(thunk)));
const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
  <PersistGate persistor={persistor}>
			<App />
		</PersistGate>
    </Provider>
  </React.StrictMode>,

  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
