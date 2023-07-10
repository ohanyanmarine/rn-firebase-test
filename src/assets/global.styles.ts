import {StyleSheet} from 'react-native';
import Colors from '../constants/Colors';
import {pixel} from '../constants/Layout';

export const globalStyles = StyleSheet.create({
  title: {
    fontFamily: 'SF Pro Display',
    fontSize: pixel(50),
    fontWeight: '600',
    lineHeight: pixel(28),
    color: Colors.lightPrimary,
  },
  butttonTitleOrText: {
    fontFamily: 'SF Pro Display',
    fontSize: pixel(16),
    fontWeight: 'bold',
    lineHeight: pixel(22),
  },
  subTitle: {
    fontFamily: 'SF Pro Display',
    fontSize: pixel(16),
    fontWeight: '400',
    lineHeight: pixel(22),
  },
});
