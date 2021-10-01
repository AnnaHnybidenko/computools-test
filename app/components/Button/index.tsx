import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './button.styles';

interface IButtonProps {
  onPress: () => void;
  isDisabled?: boolean;
}

export const Button: React.FC<IButtonProps> = ({isDisabled, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      disabled={isDisabled}
      onPress={onPress}>
      <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
  );
};
