/* eslint-disable no-alert */
import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

const typeList = [
  'Polo Tshirts',
  'Dress shirts',
  'Shorts',
  'T-Shirts',
  'Shoes',
  'Watches',
];

const itemList = [
  {
    id: 0,
    image: require('../assets/models/model_1.jpg'),
    brand: 'Tommy Hilfiger',
    type: 'T-Shirt',
    description: 'Must to have',
    price: 200,
  },
  {
    id: 1,
    image: require('../assets/models/model_2.jpg'),
    brand: 'PUMA',
    type: 'Shirt',
    description: 'Feels so good',
    price: 500,
  },
  {
    id: 2,
    image: require('../assets/models/model_1.jpg'),
    brand: 'NIKE',
    type: 'Joggers',
    description: 'Feel heavenly',
    price: 1000,
  },
  {
    id: 3,
    image: require('../assets/models/model_2.jpg'),
    brand: 'Adidas',
    type: 'Watch',
    description: 'Never wait for anyone',
    price: 5000,
  },
  {
    id: 4,
    image: require('../assets/models/model_1.jpg'),
    brand: 'Reebok',
    type: 'Socks',
    description: 'Better than shoes',
    price: 90000,
  },
  {
    id: 5,
    image: require('../assets/models/model_2.jpg'),
    brand: 'Jockey',
    type: 'Under Garments',
    description: 'Premium Quality',
    price: 90800,
  },
];

const Home = () => {
  return (
    <SafeAreaView style={style.container}>
      <Filter />
      <SuggestItems />

      <ItemView />
    </SafeAreaView>
  );
};

const Filter = () => (
  <View style={style.filterContainer}>
    <View>
      <Text>195 items</Text>
    </View>

    <View style={style.filters}>
      <TouchableOpacity
        style={style.filter}
        onPress={() => alert('Pressed Sort')}>
        <Image source={require('../assets/icons/sort.png')} />
        <Text style={style.filterText}>SORT</Text>
      </TouchableOpacity>
      <View style={style.middleFilter} />
      <TouchableOpacity
        style={style.filter}
        onPress={() => alert('Pressed Filter')}>
        <Image source={require('../assets/icons/filter.png')} />
        <Text style={style.filterText}>FILTER</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const SuggestItems = () => (
  <View style={style.suggestItemContainer}>
    <ScrollView horizontal={true}>
      <View style={style.itemContainer}>
        {typeList.map((content, id) => (
          <TouchableOpacity
            onPress={() => alert(`Pressed ${content}`)}
            key={id}
            style={style.itemList}>
            <Text style={style.item}>{content}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  </View>
);

const ItemView = () => (
  <View style={style.itemViewContainer}>
    <ScrollView>
      <View style={style.viewContainer}>
        {itemList.map(({id, image, brand, type, description, price}) => (
          <TouchableOpacity
            onPress={() =>
              alert(`Pressed on ${brand} having id ${id} price ${price}`)
            }
            key={id}
            style={style.viewList}>
            <View style={style.imgContainer}>
              <Image source={image} style={style.img} />
            </View>
            <View style={style.viewItemContainer}>
              <Text style={style.viewItemTitle}>{brand}</Text>
              <Text style={style.viewItemContent}>{type}</Text>
              <Text style={style.viewItemContent}>{description}</Text>
              <Text style={style.viewItemTitle}>{`USD ${price}`}</Text>
            </View>
            <View style={style.newTag}>
              <Text style={style.newTagText}>New</Text>
            </View>

            <TouchableOpacity
              onPress={() =>
                alert(`Pressed wishlist icon for brand ${brand} !`)
              }
              style={style.wishlist}>
              <Image source={require('../assets/icons/wishlist.png')} />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  </View>
);

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  filterContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    height: '10%',
  },
  filters: {
    flexDirection: 'row',
    width: 300,
    justifyContent: 'flex-end',
  },
  filter: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  middleFilter: {
    borderColor: 'grey',
    borderWidth: 1,
  },

  filterText: {
    margin: 5,
  },
  suggestItemContainer: {
    height: '15%',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  item: {
    fontWeight: '400',
    fontSize: 18,
  },
  itemList: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: '#DCDCDC',
    marginHorizontal: 10,
  },
  itemViewContainer: {
    marginTop: 10,
  },
  viewContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  viewList: {
    margin: 5,
    height: 300,
    width: '45%',
  },
  imgContainer: {
    backgroundColor: 'red',
    height: 200,
    borderColor: 'black',
    borderWidth: 1,
  },

  viewItemTitle: {
    fontWeight: '500',
  },

  viewItemContent: {
    fontWeight: '400',
  },
  viewItemContainer: {
    paddingTop: 5,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  newTag: {
    position: 'absolute',
    top: 0,
    backgroundColor: 'green',
    padding: 6,
  },
  newTagText: {
    color: 'white',
  },
  wishlist: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: '#E9EEEA',
    padding: 8,
    borderRadius: 100,
  },
});

export default Home;
