import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {ColorfullButton} from '../../components/PrimaryButton';
import {AuthContext} from '../../navigation/AuthProvider';
import {styles} from './HomeScreen.style';

export const HomeScreen: React.FC = () => {
  const {user, logout} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>User {user.uid}</Text>
      <ColorfullButton
        title="Log out"
        onPress={logout}
        style={styles.buttonContainer}
      />
    </View>
  );
};
