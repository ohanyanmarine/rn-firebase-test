import React from 'react';
import {Platform, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
// import { Provider } from 'react-redux';
// import store from './src/store/store';
import Colors from './src/constants/Colors';
import Main from './src';

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

const App = () => {
  return (
    <>
      {Platform.OS === 'android' && (
        <SafeAreaView>
          <StatusBar
            barStyle="dark-content"
            backgroundColor={Colors.darkPrimary}
          />
        </SafeAreaView>
      )}
      {/* <Provider store={store}> */}
      <Main />
      {/* </Provider> */}
    </>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
    backgroundColor: Colors.darkSecondary,
  },
});

export default App;
