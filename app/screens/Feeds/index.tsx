import React from 'react';
import {View, FlatList, Text, Image} from 'react-native';
import {NavigationHeader} from '../../components';
import styles from './feeds.styles';

export const FeedsScreen: React.FC = () => {
  return (
    <View style={styles.feedsContainer}>
      <NavigationHeader />
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => (
          <Text style={styles.feedsText}>{item.key}</Text>
        )}
      />
    </View>
  );
};
