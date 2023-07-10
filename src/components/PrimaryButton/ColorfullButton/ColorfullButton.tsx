import React from 'react';
import {Text, ViewStyle, TouchableOpacity} from 'react-native';
import {globalStyles} from '../../../assets/global.styles';
import {styles} from './ColorfullButton.style';

type Props = {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  isBorderLess?: boolean;
};
const ColorFullButton: React.FC<Props> = ({
  title,
  onPress,
  style,
  isBorderLess,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[isBorderLess ? styles.containerLess : styles.container, style]}>
      <Text
        style={[
          globalStyles.butttonTitleOrText,
          isBorderLess ? styles.titleLess : styles.title,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export default ColorFullButton;
