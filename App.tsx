import React from 'react';

import {
  View, //like div
  Text, //write text
  StyleSheet,
  useColorScheme,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import FlatCard from './components/FlatCard';
import ElavatedCards from './components/ElavatedCards';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
        <ElavatedCards />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
