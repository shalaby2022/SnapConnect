import React from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';
import WhatsApp from './src/pages/whatsapp/WhatsApp';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <WhatsApp />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
});

export default App;
