/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const store = createStore(rootReducer)


AppRegistry.registerComponent(appName, () =><Provider store={store}> App </Provider>);
