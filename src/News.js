import React from 'react';
import {SafeAreaView, View, StyleSheet, FlatList} from 'react-native';

import {NewsCard, Banner, Footer} from './components/Index';

const myData = [
  {
    id: 0,
    marka: 'Bmw',
    desc:
      'Bayerische Motoren Werke AG, commonly referred to as BMW  is a German multinational company which produces luxury vehicles and motorcycles. The company was founded in 1916 as a manufacturer of aircraft engines, which it produced from 1917 until 1918 and again from 1933 to 1945.',
    img: require('./img/bmw.jpg'),
    img2: require('./img/bmw2.jpg'),
    color: '#66bb6a',
  },
  {
    id: 1,
    marka: 'Mercedes',
    desc:
      'Mercedes-Benz is both a German automotive marque and, from late 2019 onwards, a subsidiary (Mercedes-Benz AG) of Daimler AG. Mercedes-Benz is known for producing luxury vehicles and commercial vehicles.The headquarters is in Stuttgart, Baden-Württemberg.',
    img: require('./img/mercedes.png'),
    img2: require('./img/mercedes2.jpg'),
    color: '#90a4ae',
  },
  {
    id: 2,
    marka: 'Lamborgini',
    desc:
      'Automobili Lamborghini S.p.A. (Italian pronunciation: [lamborˈɡiːni]) is an Italian brand and manufacturer of luxury sports cars and SUVs based in SantAgata Bolognese. The company is owned by the Volkswagen Group through its subsidiary Audi.',
    img: require('./img/lamborgini.jpg'),
    img2: require('./img/lamborgini2.jpg'),
    color: '#ffe082',
  },
  {
    id: 3,
    marka: 'Ferrari',
    desc:
      'Ferrari  is an Italian luxury sports car manufacturer based in Maranello, Italy. Founded by Enzo Ferrari in 1939 out of Alfa Romeos race division as Auto Avio Costruzioni, the company built its first car in 1940. However, the companys inception as an auto manufacturer is usually recognized in 1947',
    img: require('./img/ferrari.jpg'),
    img2: require('./img/ferrari2.jpg'),
    color: '#f06292',
  },
  {
    id: 4,
    marka: 'Rolls-Royce',
    desc:
      'Rolls-Royce Motor Cars Ltd. ist ein britischer Automobilhersteller in der Tradition des Unternehmens Rolls-Royce, dessen Wurzeln im Bau von Elektroanlagen, Kränen und den luxuriösen Rolls-Royce-Automobilen liegen. Der Automobilbau ist seit dem Jahr 2000 ein Teil des BMW-Konzerns.',
    img: require('./img/rr.jpg'),
    img2: require('./img/rr.jpg'),
    color: '#f06292',
  },
];

const News = () => {
  const renderMyData = ({item}) => <NewsCard news={item} />;

  // {<Navbar />
  // <Banner />

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#e6e6e6'}}>
      <View>
        <FlatList
          keyExtractor={(item, index) => item.id.toString()}
          // yukarıdaki ezbere de yazılabilir. liste de ayrıştırma yapabilmek için tek benzersiz bir değer girmek laazım. o yüzden genelde listelere ıd numarası verilir.
          data={myData}
          renderItem={renderMyData}
          numColumns={2}
          // bu şekilde kolon sayısı ekleyebeilriiz. ama width ayarlamak gerekiyor
          ListHeaderComponent={Banner}
          ListFooterComponent={Footer}
        />
      </View>
      {/* <Text>selam</Text>
      <Footer /> */}
    </SafeAreaView>
  );
};

export default News;

const styles = StyleSheet.create({
  textStyle2: {
    position: 'absolute',
    fontSize: 13,
    color: 'white',
    textAlign: 'center',
    alignItems: 'flex-end',
    color: 'black',
  },
  textStyle3: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 10,
  },
});
