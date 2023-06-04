import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import ContactApp from './ContactsApp';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ContactApp/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
