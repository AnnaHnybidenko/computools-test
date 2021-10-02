import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import axios from 'axios';

import {NavigationHeader} from '../../components';
import styles from './profile.styles';
import {useSelector} from 'react-redux';

export const ProfileScreen: React.FC = ({navigation}) => {
  const [data, setData] = useState({});

  const onFeedPress = () => {
    navigation.navigate('Feeds');
  };
  const email = useSelector(state => state.user.email);

  useEffect(() => {
    axios.get('https://reqres.in/api/users/2').then(response => {
      const user = response.data;
      setData(user);
    });
  }, []);
  return (
    <View style={styles.profileContainer}>
      <NavigationHeader onFeedPress={onFeedPress} />
      <View>
        <Image
          source={{uri: data.data?.avatar}}
          style={{width: 200, height: 200}}
        />
        <Text>Name: {data.data?.first_name}</Text>
        <Text>Email: {email}</Text>
      </View>
    </View>
  );
};
