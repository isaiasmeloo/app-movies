import React, { Component } from 'react';
import { View } from 'react-native';

import { createAppContainer, createMaterialTopTabNavigator } from 'react-navigation';

import Header from '../../components/Header';
import Popular from '../Popular'
import TopRated from '../TopRated'

import { primary, tertiary } from '../../helpers/colors';

export default class Main extends Component {

  render() {
    const Routes = createAppContainer(createMaterialTopTabNavigator(
      {
        Popular: {
          screen: Popular,
          navigationOptions: {
            title: 'Popular'
          }
        },
        TopRated: {
          screen: TopRated,
          navigationOptions: {
            title: 'Top Rated'
          }
        },
      },
      {
        tabBarOptions: {
          showLabel: true,
          activeTintColor: tertiary,
          inactiveTintColor: '#bbb',
          style: {
            backgroundColor: primary,
          },
          indicatorStyle: {
            backgroundColor: tertiary,
          },
        }
      }
    )
    )
    return (
      <View style={{ flex: 1 }} >
        <Header title="Movies" />
        <Routes />
      </View>
    );
  }
}
