import React from 'react';
import { View, Text, Image } from 'react-native';

import moment from 'moment'

import Icon from 'react-native-vector-icons/FontAwesome'
import { tertiary, gray } from '../../helpers/colors';
import styles from './styles';

const FilmCard = ({ image, title, release_date, average, overview, popularity }) => (
  <View style={styles.container}>
    <View style={{ backgroundColor: '#404040', width: '30%' }}>
      <Image source={{ uri: image }}
        style={{ flex: 1, height: 170 }}
      />
    </View>

    <View style={styles.containerInfo}>
      <View>
        <Text style={styles.title} numberOfLines={1}> {title} </Text>
        <Text style={{ color: gray, textAlign: 'justify' }} numberOfLines={4}> {overview} </Text>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <View style={styles.containerIcon}>
          <Icon name="history" size={14} color={tertiary} />
          <Text style={[{ marginLeft: 5 }, styles.text]}>
            {moment(release_date, "YYYYMMDD").fromNow()}
          </Text>
        </View>
        <View style={styles.containerIcon}>
          <View style={styles.containerIcon}>
            <Icon name="user" size={14} color={tertiary} />
            <Text style={styles.text}> {popularity} </Text>
          </View>
          <View style={[styles.containerIcon, { marginLeft: 10 }]}>
            <Icon name="star" size={14} color={tertiary} />
            <Text style={styles.text}> {average} </Text>
          </View>
        </View>
      </View>

    </View>

  </View >
);

export default FilmCard;
