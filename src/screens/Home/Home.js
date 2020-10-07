import React from 'react';
import Button from '../../components/button.js';
import {StyleSheet, View} from 'react-native';
const Home = (props) => {
  return (
    <View style={styles.submitButton}>
      <Button
        Text="Go To Login"
        loading={true}
        onPress={() => props.navigation.navigate('Login')}
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

export default Home;
