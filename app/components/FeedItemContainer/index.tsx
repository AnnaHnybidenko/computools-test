import React from 'react';
import {View, Text, Image, SafeAreaView, FlatList} from 'react-native';
import styles from './feed-item-container.styles';

interface IFeedImageContainerProps {
  num: number;
  title: string;
}

export const FeedImageContainer: React.FC<IFeedImageContainerProps> = ({
  num,
  title,
}) => {
  return (
    <View>
      <Image
        source={{uri: 'https://picsum.photos/200/300?random=1'}}
        style={{width: 100, height: 100}}>
        <Text>{title}</Text>
      </Image>
    </View>
  );
};
