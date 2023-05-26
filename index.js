import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';
import 'react-native-get-random-values';
require('node-libs-react-native/globals');
// LogBox.ignoreAllLogs();

AppRegistry.registerComponent(appName, () => App);
