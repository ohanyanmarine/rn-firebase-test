import React, {useContext, useState} from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../navigation/AuthStack';
import {ColorfullButton} from '../../components/PrimaryButton';
import InputComponent from '../../components/InputComponent/InputComponent';
import {AuthContext} from '../../navigation/AuthProvider';
import {styles} from './Welcome.style';

type Props = NativeStackScreenProps<AuthStackParamList, 'Welcome'>;

export const Welcome: React.FC = () => {
  const navigation = useNavigation<Props['navigation']>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome!</Text>
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
        <ColorfullButton
          style={styles.button}
          title={'Sign In'}
          onPress={() => login(email, password)}
        />
      </View>
      <ColorfullButton
        style={styles.button}
        title={"Don't have an account? Create here"}
        onPress={() => navigation.navigate('SignUp')}
        isBorderLess
      />
    </View>
  );
};
