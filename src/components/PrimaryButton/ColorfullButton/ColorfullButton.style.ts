import {StyleSheet} from 'react-native';
import {pixel} from '../../../constants/Layout';
import Colors from '../../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: pixel(20),
    width: '100%',
    backgroundColor: Colors.darkSecondary,
    borderRadius: pixel(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: Colors.lightPrimary,
  },
  containerLess: {
    paddingVertical: pixel(20),
    width: '100%',
    backgroundColor: Colors.darkPrimary,
    borderRadius: pixel(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleLess: {
    color: Colors.darkBackground,
  },
});
