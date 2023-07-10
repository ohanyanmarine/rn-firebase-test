import {StyleSheet} from 'react-native';
import {globalStyles} from '../../assets/global.styles';
import Colors from '../../constants/Colors';
import {pixel} from '../../constants/Layout';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderColor: Colors.darkBorder,
    borderWidth: pixel(1),
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: pixel(16),
    justifyContent: 'space-between',
    paddingHorizontal: pixel(20),
  },
  textInpuContainer: {
    paddingVertical: pixel(19),
    ...globalStyles.subTitle,
    color: Colors.lightPrimary,
    width: '100%',
  },
  icons: {},
  errorText: {
    color: Colors.red,
    padding: pixel(4),
  },

  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default styles;
