import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElavatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElavatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.box, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.box, styles.cardElevated]}>
          <Text>me</Text>
        </View>
        <View style={[styles.box, styles.cardElevated]}>
          <Text>to</Text>
        </View>
        <View style={[styles.box, styles.cardElevated]}>
          <Text>scroll</Text>
        </View>
        <View style={[styles.box, styles.cardElevated]}>
          <Text>more..</Text>
        </View>
      </ScrollView>
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
    width: 100,
    height: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    margin: 8,
  },
  cardElevated: {
    backgroundColor: '#CAD5E2',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
  },
});
