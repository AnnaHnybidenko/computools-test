import React from 'react';
import { TouchableOpacity ,View, Text } from 'react-native';
import styles from './navigation-header.styles';

export const NavigationHeader = () => {

    return(
        <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.headerButton}>
                <Text style={styles.headerText}> Feed </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerButton}>
                <Text style={styles.headerText}> Profiles </Text>
            </TouchableOpacity>
        </View>
    )
}