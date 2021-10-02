import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from './navigation-header.styles';

interface INavigationHeaderProps {
  onFeedPress?: () => void;
  onProfilePress?: () => void;
}

export const NavigationHeader: React.FC<INavigationHeaderProps> = ({
  onFeedPress,
  onProfilePress,
}) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={onFeedPress ? styles.headerButton : styles.headerButtonActive}
        onPress={onFeedPress}
        disabled={!onFeedPress}>
        <Text style={styles.headerText}> Feed </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={onProfilePress ? styles.headerButton : styles.headerButtonActive}
        onPress={onProfilePress}
        disabled={!onProfilePress}>
        <Text style={styles.headerText}> Profiles </Text>
      </TouchableOpacity>
    </View>
  );
};
