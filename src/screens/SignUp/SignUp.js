import React from 'react';
import Button from '../../components/button.js';
import {StyleSheet, View} from 'react-native';
const Signup = (props) => {
  return (
    <View style={styles.submitButton}>
      <Button
        Text="Signup"
        loading={false}
        onPress={() => {
          console.log('buttoooon chal gaya');
        }}
      />
    </View>
  );
};

const border = {
  borderStyle: 'solid',
  borderColor: 'red',
  borderWidth: 1,
};

const styles = StyleSheet.create({
  submitButton: {
    ...border,
    width: 100,
    marginTop: 10,
  },
});

export default Signup;
