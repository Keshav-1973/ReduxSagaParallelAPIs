//import liraries
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {createStore, applyMiddleware, compose} from 'redux';
import users from './src/reducers';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';
import SagaApp from './src/SagaApp';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(users, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

// create a component
const MyComponent = () => {
  return (
    <ScrollView>
      <Provider store={store}>
        <SagaApp />
      </Provider>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

//make this component available to the app
export default MyComponent;
