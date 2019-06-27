import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import api from '../../services/api'

import { secundary } from '../../helpers/colors';

import FilmCard from '../../components/FilmCard';

export default class TopRated extends Component {

  state = {
    data: [],
  }

  getMovies = () => {
    api.get('/movie/top_rated/', {
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
    <FilmCard
      image={`https://image.tmdb.org/t/p/w780${item.poster_path}`}
      title={item.title}
      overview={item.overview}
      release_date={item.release_date}
      average={item.vote_average}
      popularity={item.popularity}
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
        />
      </View>
    );
  }
}
