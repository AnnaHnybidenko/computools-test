import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationHeader} from './app/components';

import {LoginScreen} from './app/screens';
import {FeedsScreen} from './app/screens/Feeds';
import {COLORS} from './app/utils/colors';

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: COLORS.SMOOTH_GREY,
    height: '100%',
    width: '100%',
  },
});

const App = () => {
  return (
    <View style={styles.appContainer}>
      {/* <LoginScreen/> */}
      <FeedsScreen />
    </View>
  );
};

export default App;
