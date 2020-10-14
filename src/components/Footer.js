import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Footer = () => {
  return (
    <View style={styles.textStyle1}>
      <Text style={styles.textStyle2}>Tlh Web Design</Text>
      <Text style={styles.textStyle3}>Copyright © 2020</Text>
    </View>
  );
};

export {Footer};

const styles = StyleSheet.create({
  textStyle1: {
    marginBottom: 10,
    backgroundColor: '#343A40',
    padding : 10
},
textStyle2: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
textStyle3: {
    fontSize: 10,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',

  },
});
