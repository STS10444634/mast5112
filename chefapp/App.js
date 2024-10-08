/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { Button, TextInput, View, Text, FlatList } from 'react-native';

const App = () => {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('');
  const [price, setPrice] = useState('');
  const [menuItems, setMenuItems] = useState([]);

  const addMenuItem = () => {
    if (!dishName || !description || !course || !price) {
      alert('Please fill in all fields');
      return;
    }

    const newItem = {
      id: Math.random().toString(),
      dishName,
      description,
      course,
      price,
    };

    setMenuItems((currentItems) => [...currentItems, newItem]);
    setDishName('');
    setDescription('');
    setCourse('');
    setPrice('');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, textAlign: 'center' }}>Chef's Menu</Text>

      <TextInput
        placeholder="Dish Name"
        value={dishName}
        onChangeText={(text) => setDishName(text)}
        style={styles.input}
      />

      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={(text) => setDescription(text)}
        style={styles.input}
      />

      <TextInput
        placeholder="Course (e.g. Starter, Main, Dessert)"
        value={course}
        onChangeText={(text) => setCourse(text)}
        style={styles.input}
      />

      <TextInput
        placeholder="Price"
        value={price}
        onChangeText={(text) => setPrice(text)}
        keyboardType="numeric"
        style={styles.input}
      />

      <Button title="Add Menu Item" onPress={addMenuItem} />

      <Text style={{ fontSize: 18, marginTop: 20 }}>
        Total Menu Items: {menuItems.length}
      </Text>

      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={{ fontWeight: 'bold' }}>{item.dishName}</Text>
            <Text>{item.description}</Text>
            <Text>{item.course} - ${item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = {
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
    padding: 8,
    fontSize: 16,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
};

export default App;