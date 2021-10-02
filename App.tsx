import React from 'react';
import {Provider} from 'react-redux';
import {RootNavigator} from './app/navigation';

import {store} from './app/redux';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
