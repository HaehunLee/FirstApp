/**
 * @format
 */

import {AppRegistry} from 'react-native';
// 절대 경로 '~/'
import App from '~/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
