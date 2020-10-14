import React from 'react';
import {
  SafeAreaView,
  Dimensions,
  Image,
  Text,
  TextInput,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const Banner = () => {
  const banner_data = [
    {
      id: 0,
      text1: 'Bugatti Chiron',
      text2: "it's price is 25 million dollars.",
      imageUrl:
        'https://staticb.yolcu360.com/blog/wp-content/uploads/2019/09/25222734/Bugatti-Chiron-500x313.jpg',
    },

    {
      id: 1,
      text1: ' Aston Martin Vulcan',
      text2: "it's price is 23 million dollars.",
      imageUrl:
        'https://staticb.yolcu360.com/blog/wp-content/uploads/2019/09/25222817/Aston-Martin-Vulcan-500x281.jpg',
    },
    {
      id: 2,
      text1: 'Lamborghini Sesto Elemento',
      text2: "it's price is 22 million dollars.",
      imageUrl:
        'https://staticb.yolcu360.com/blog/wp-content/uploads/2019/09/25222902/Lamborghini-Sesto-Elemento--500x266.jpeg',
    },
    {
      id: 3,
      text1: 'Ferrari La Aperta',
      text2: "it's price is 14 million dollars.",
      imageUrl:
        'https://staticb.yolcu360.com/blog/wp-content/uploads/2019/09/25223928/Ferrari-La-Aperta-500x281.jpg',
    },
    {
      id: 4,
      text1: 'Rolls-Royce Phantom Serenity',
      text2: "it's price is 11 million dollars.",
      imageUrl:
        'https://staticb.yolcu360.com/blog/wp-content/uploads/2019/09/25223447/Rolls-Royce-Phantom-Serenity-500x331.jpg',
    },
  ];

  return (
    <SafeAreaView>
      <View style={styles.navbar}>
        <TouchableOpacity>
          <Text style={styles.navbarText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navbarText}>Products</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity>
          <Text style = {styles.navbarText}>Galery</Text>        
      </TouchableOpacity> */}

        <TouchableOpacity>
          <Text style={styles.navbarText}>About</Text>
        </TouchableOpacity>
        <View style={styles.navbar2}>
          <TextInput
            style={styles.touchText}
            keyboardType="email-address"
            placeholder="Search"
          />
          <TouchableOpacity style={styles.touch}>
            <Text style={styles.navbarText1}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View  style={styles.navbar3}>
        <Text style={{color : "white",}}>⭐⭐⭐           Lux Auto Galery            ⭐⭐⭐</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {banner_data.map((item) => {
          return (
            <View style={styles.container}>
              <Image source={{uri: item.imageUrl}} style={styles.image} />
              <Text style={styles.text1}>{item.text1}</Text>
              <Text style={styles.text2}>{item.text2}</Text>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export {Banner};

const styles = StyleSheet.create({
  container :{
    
    justifyContent  :"flex-end",  
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.25,
    resizeMode: 'cover',
    margin: 5,
 
  },
  text1: {
    position: 'absolute',
    marginBottom : 50,
    color : "white",
    backgroundColor: '#343A40',
    paddingVertical : 3,
    paddingHorizontal : 10,
    top:10, 
    left:10,
    fontSize : 15,
    borderRadius : 5
    

  },
  text2: {
    position: 'absolute',
    marginBottom : 50,
    color : "white",
    backgroundColor: '#343A40',
    paddingVertical : 3,
    paddingHorizontal : 10,
    bottom:-45, 
    right:10,
    fontSize : 15,
    borderRadius : 5
  },
  navbar: {
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#343A40',
  },
  navbar3: {
    marginTop : 2,
    paddingVertical: 5,
    
    alignItems: 'center',
    backgroundColor: '#4d4d4d',
  },
  navbar2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#343A40',
  },
  navbarText: {
    fontWeight: 'bold',
    // borderBottomWidth : 1,
    fontSize: 14,
    color: 'white',
  },
  navbarText1: {
    fontWeight: 'bold',
    // borderBottomWidth : 1,
    fontSize: 13,
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    padding: 5,
    borderRadius: 5,
  },
  touch: {
    marginLeft: 15,
  },
  touchText: {
    marginLeft: 35,
    backgroundColor: 'white',
    paddingVertical: -19,
    paddingHorizontal: 25,
    borderRadius: 5,
  },
});
