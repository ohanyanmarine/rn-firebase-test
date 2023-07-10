import React, {useContext, useState} from 'react';
import {Text, View} from 'react-native';
import {ColorfullButton} from '../../components/PrimaryButton';
import InputComponent from '../../components/InputComponent/InputComponent';
import {AuthContext} from '../../navigation/AuthProvider';
import {styles} from './SignUp.style';

export const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {register} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Sign Up</Text>
      <View style={styles.buttonContainer}>
        <InputComponent
          placeholderText="Email"
          onChangeValue={text => setEmail(text)}
          value={email}
          disabled={false}
          style={styles.input}
        />
        <InputComponent
          placeholderText="Password"
          onChangeValue={text => setPassword(text)}
          value={password}
          disabled={false}
          secureTextEntry
          style={styles.input}
        />
      </View>
      <ColorfullButton
        title="Sign Up"
        onPress={() => register(email, password)}
        style={styles.button}
      />
    </View>
  );
};
