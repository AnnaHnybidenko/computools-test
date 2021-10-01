import React, {useState} from 'react';
import {View} from 'react-native';

import {Button} from '../../components/Button';
import {LoginTextInput} from '../../components/LoginTextInput';
import {emailValidation, passwordValidation} from '../../utils/validation';
import styles from './login.styles';

//TODO: typing
export const LoginScreen: React.FC = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const onEmailChange = (value: string) => {
    const {error} = emailValidation(value);
    emailValidation(value);
    setEmailError(error);
    setEmail(value);
  };

  const onPasswordChange = (value: string) => {
    const {error} = passwordValidation(value);
    setPasswordError(error);
    setPassword(value);
  };

  const onLoginPress = () => {
    console.log(email, password);
    navigation.navigate('Feeds');
  };

  return (
      <View style={styles.loginContainer}>
        <LoginTextInput
          placeholder={'Email'}
          onChangeText={onEmailChange}
          error={emailError}
        />
        <LoginTextInput
          placeholder={'Password'}
          onChangeText={onPasswordChange}
          error={passwordError}
        />
        <Button
          onPress={onLoginPress}
          isDisabled={!(email && password && !emailError && !passwordError)}
        />
      </View>
  );
};
