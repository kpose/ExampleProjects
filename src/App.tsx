import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <Text style={styles.headerText}> Accept Payment With Flutterwave!!</Text>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});
