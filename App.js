/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect, useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Button from './src/components/button';
import TextInput from './src/components/textInput';
import hello from './src/assets/hello.png';
// import Seeb from './src/assets/Untitled.png';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const [username, setusername] = useState('');

  const handleUserName = (text) => {
    const name = setusername(text);
    console.log(name);
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={{marginTop: 2}}>
            <TextInput
              label="enter name"
              handleChange={handleUserName}
              value={username}
              //errorMsg="wrong number"
            />
          </View>

          <View style={styles.submitButton}>
            <Button
              Text="Submit"
              loading={true}
              onPress={() => {
                console.log('buttoooon chal gaya');
              }}
            />
          </View>

          <View style={{marginTop: 2}}>
            <Image style={styles.images} source={hello} resizeMode="contain" />
          </View>

          {/* <View style={{marginTop: 2}}>
            <Image style={styles.images} source={Seeb} resizeMode="contain" />
          </View> */}

          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}> HELLo </Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> hello to the
                to change this screen and then come back to see your edits.
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
const border = {
  borderStyle: 'solid',
  borderColor: 'red',
  borderWidth: 1,
};

const styles = StyleSheet.create({
  images: {
    width: '50%',
    height: 100,
  },
  submitButton: {
    ...border,
    width: 100,
    marginTop: 10,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
