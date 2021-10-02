import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
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

  const onLogoutPress = () => {
    navigation.navigate('Login');
  };

  useEffect(() => {
    axios.get('https://reqres.in/api/users/4').then(response => {
      const user = response.data;
      setData(user);
    });
  }, []);
  return (
    <View style={styles.profileContainer}>
      <NavigationHeader onFeedPress={onFeedPress} />
      <View style={styles.profileItemContainer}>
        <Image source={{uri: data.data?.avatar}} style={styles.profileImage} />
        <View style={styles.profileTextContainer}>
          <Text style={styles.profileText}>Name: {data.data?.first_name}</Text>
          <Text style={styles.profileText}>Email: {email}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.profileButton} onPress={onLogoutPress}>
        <Text style={styles.profileText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};
