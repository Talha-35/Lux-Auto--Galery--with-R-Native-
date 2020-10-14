import React from 'react';
import {
  SafeAreaView,
  Dimensions,
  Image,
  Text,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';

const NewsCard = ({news}) => {
  return (
    <View style={styles.container}>
      <Image source={news.img2} style={styles.image} />

      <Text numberOfLines={3} style={styles.text1}>{news.marka}</Text>
      <Text>{news.desc}</Text>
       
    </View>
    
  );
};

export {NewsCard};

const styles = StyleSheet.create({
  container: {
      flex : 1,
    // width: Dimensions.get('window').width,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth : 1,
    borderColor : "#c4c4c4",
    margin: 5,
    padding: 5,
    borderRadius : 5,
    backgroundColor: '#eceff1',
  },
  text1: {
    fontWeight: 'bold',
    fontSize : 18,
    
  },
  image: {
    width : '100%',
    height: Dimensions.get('window').height * 0.2,
    resizeMode:"stretch",
    borderRadius : 5
  },
});
