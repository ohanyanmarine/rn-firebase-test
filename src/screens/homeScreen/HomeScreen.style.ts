import {StyleSheet} from 'react-native';
import {pixel} from '../../constants/Layout';
import {globalStyles} from '../../assets/global.styles';
import Colors from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: pixel(16),
  },
  welcomeText: {
    ...globalStyles.title,
    fontSize: pixel(20),
    lineHeight: pixel(38.4),
    color: Colors.darkYellowLight,
    textAlign: 'center',
    paddingHorizontal: pixel(50),
  },
  buttonContainer: {
    width: '100%',
    marginTop: pixel(50),
  },
});
