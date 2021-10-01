import React from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './login-text-input.styles';

interface ILoginTextInputProps {
  placeholder: string;
  onChangeText: (text: string) => void;
  error: string;
}

export const LoginTextInput: React.FC<ILoginTextInputProps> = ({
  placeholder,
  onChangeText,
  error,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.loginTextInputText}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
      {!!error && <Text style={styles.loginErrorText}>{error}</Text>}
    </View>
  );
};
