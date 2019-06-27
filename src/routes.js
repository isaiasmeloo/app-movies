import { createAppContainer, createSwitchNavigator, createMaterialTopTabNavigator } from 'react-navigation';

import React from 'react'
import { View } from 'react-native'

import Main from './pages/Main'
import TopRated from './pages/TopRated'

import { primary, tertiary, white } from './helpers/colors';
import Icon from 'react-native-vector-icons/FontAwesome'

const Routes = createAppContainer(createSwitchNavigator({ Main }));

export default Routes;
