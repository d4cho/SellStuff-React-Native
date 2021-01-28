import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

import colors from '../config/colors';

const CATEGORIES = [
  { key: '1', category: 'Books' },
  { key: '2', category: 'Cameras' },
  { key: '3', category: 'Cars' },
  { key: '4', category: 'Clothes' },
  { key: '5', category: 'Electronics' },
  { key: '6', category: 'Furniture' },
  { key: '7', category: 'Instruments' }
];

const ITEM_DATA = [
  {
    key: 'i1',
    title: 'test',
    price: '123',
    img: 'https://picsum.photos/300/200'
  },
  {
    key: 'i2',
    title: 'qwe',
    price: '234',
    img: 'https://picsum.photos/300/200'
  },
  {
    key: 'i3',
    title: 'asd',
    price: '345',
    img: 'https://picsum.photos/300/200'
  },
  {
    key: 'i4',
    title: 'zxc',
    price: '456',
    img: 'https://picsum.photos/300/200'
  },
  {
    key: 'i5',
    title: 'foo',
    price: '567',
    img: 'https://picsum.photos/300/200'
  },
  {
    key: 'i6',
    title: 'bar',
    price: '678',
    img: 'https://picsum.photos/300/200'
  }
];

const HomeScreen = () => {
  const renderCategory = ({ item }) => (
    <View style={styles.categoryContainer}>
      <Text style={styles.categoryItem}>{item.category}</Text>
    </View>
  );

  const renderItems = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image
        style={styles.image}
        source={{
          uri: item.img
        }}
        resizeMode='stretch'
      />
      <View style={{ paddingLeft: 15, justifyContent: 'center' }}>
        <Text style={{ fontSize: 18 }}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        data={CATEGORIES}
        renderItem={renderCategory}
      />
      <FlatList
        style={{
          backgroundColor: 'green',
          width: '100%',
          padding: 20
        }}
        data={ITEM_DATA}
        renderItem={renderItems}
      />
      <View style={styles.footerContainer}>
        <Text>HOME</Text>
        <Text>ADD</Text>
        <Text>ACCOUNT</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  categoryContainer: {
    backgroundColor: 'purple',
    height: 60,
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },
  categoryItem: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 50,
    borderColor: 'white',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4
  },
  itemContainer: {
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: 'white',
    marginBottom: 20,
    height: 250
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: 60,
    backgroundColor: 'orange'
  },
  price: {
    color: colors.secondary
  }
});

export default HomeScreen;
