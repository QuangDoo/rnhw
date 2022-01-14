import React from 'react';
import {ReactNode} from 'react';
import {Text, View, StyleSheet, ViewStyle, StyleProp} from 'react-native';

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
  children: ReactNode;
};

// Component wrap text to row

const WrapperTextRow = (props: Props) => {
  const {containerStyle, children} = props;
  return <View style={[style.container, containerStyle]}>{children}</View>;
};

export default WrapperTextRow;

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
