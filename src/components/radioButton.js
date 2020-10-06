/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
const RadioButton = (props) => {
  return (
    <View
      style={[
        {
          height: 20,
          width: 20,
          borderRadius: 12,
          borderWidth: 2,
          borderColor: '#be3232',
          alignItems: 'center',
          justifyContent: 'center',
        },
        props.style,
      ]}>
      {props.selected ? (
        <View
          style={{
            height: 12,
            width: 12,
            borderRadius: 6,
            backgroundColor: '#be3232',
          }}
        />
      ) : null}
    </View>
  );
};

export default RadioButton;
