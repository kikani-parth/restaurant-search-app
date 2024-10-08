// RestaurantList.js

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import RestaurantDetail from './RestaurantDetail';
import { withNavigation } from 'react-navigation';

const RestaurantsList = ({ title, restuarants, navigation }) => {
  if (!restuarants.length) return null;
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={restuarants}
        keyExtractor={(restuarant) => restuarant.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Restaurant', { id: item.id })}
            >
              <RestaurantDetail restaurant={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginBottom: 10,
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 13,
    color: '#FFFFFF',
  },
});

export default withNavigation(RestaurantsList);
