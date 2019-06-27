import React, { Component } from 'react';
import { View, FlatList, Image, Text } from 'react-native';

import api from '../../services/api'

import { secundary } from '../../helpers/colors';

export default class Popular extends Component {

  state = {
    data: [],
  }

  getMovies = () => {
    api.get('/movie/popular/', {
      params: {
        api_key: 'a0ea3575a81a06033c11d74f455eed8e',
        language: 'en-US',
        page: 1
      }
    }).then((res) => {
      this.setState({ data: res.data.results })
    }).catch((err) => {
      alert(err)
    })
  }

  componentDidMount() {
    this.getMovies()
  }

  _keyExtractor = (item) => String(item.id);

  _renderItem = ({ item }) => (
    <Image source={{ uri: `https://image.tmdb.org/t/p/w780${item.poster_path}` }}
      resizeMode="contain"
      style={{ flex: 1, height: 170, margin: 3 }}
    />
  )

  render() {
    const { data } = this.state

    return (
      <View style={{ flex: 1, backgroundColor: secundary }}>
        <FlatList
          data={data}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          style={{ padding: 5 }}
          numColumns={3}
        />
      </View>
    );
  }
}
