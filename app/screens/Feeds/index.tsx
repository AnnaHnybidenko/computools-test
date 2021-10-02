import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, View} from 'react-native';

import {NavigationHeader} from '../../components';
import styles from './feeds.styles';

export const FeedsScreen: React.FC = ({navigation}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://picsum.photos/v2/list').then(response => {
      const images = response.data;
      setData(images);
    });
  }, []);

  const onProfilePress = () => {
    navigation.navigate('Profile');
  };

  const renderImageItem = ({item}: {item: any}) => {
    return (
      <View style={styles.feedContainer}>
        <Image
          source={{uri: `${item.download_url}`}}
          style={styles.feedImage}
        />
        <View style={styles.feedTextContainer}>
          <Text style={styles.feedText}>{item.author}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.feedsContainer}>
      <NavigationHeader onProfilePress={onProfilePress} />
      <FlatList data={data} renderItem={renderImageItem}></FlatList>
    </View>
  );
};
