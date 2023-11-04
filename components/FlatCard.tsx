import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.box, styles.cardOne]}>
          <Text>Red</Text>
        </View>

        <View style={[styles.box, styles.cardTwo]}>
          <Text>Green</Text>
        </View>

        <View style={[styles.box, styles.cardThree]}>
          <Text>Blue</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: 'yellow',
    paddingHorizontal: 10,
  },
  container: {
    padding: 10,
    backgroundColor: 'pink',
    flex: 1,
    flexDirection: 'row',
  },
  box: {
    height: 100,
    width: 100,
    borderRadius: 4,
    margin: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'green',
  },
  cardThree: {
    backgroundColor: 'blue',
  },
});
