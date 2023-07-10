import React from 'react';
import {View, TextInput, Text, ViewStyle} from 'react-native';
import Colors from '../../constants/Colors';
import styles from './InputComponent.style';

type Props = {
  value: string;
  onChangeValue: (value: string) => void;
  disabled: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  isError?: boolean;
  errorName?: string;
  placeholderText?: any;
  secureTextEntry?: boolean;
  style?: ViewStyle;
};
const InputComponent: React.FC<Props> = ({
  value,
  onChangeValue,
  disabled,
  onFocus,
  onBlur,
  isError,
  errorName,
  placeholderText,
  secureTextEntry,
  style,
}) => {
  return (
    <View style={style}>
      <View
        style={[
          styles.container,
          {borderColor: isError ? Colors.red : Colors.darkBorder},
        ]}>
        <View style={styles.leftContainer}>
          <TextInput
            value={value}
            onChangeText={onChangeValue}
            style={styles.textInpuContainer}
            onFocus={onFocus}
            onBlur={onBlur}
            placeholder={placeholderText}
            placeholderTextColor={Colors.darkBackground}
            editable={!disabled}
            selectTextOnFocus={!disabled}
            secureTextEntry={secureTextEntry}
          />
        </View>
      </View>
      {errorName && <Text style={styles.errorText}>{errorName}</Text>}
    </View>
  );
};
export default InputComponent;
