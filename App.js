import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const Course = ({ name, description, image }) => {
  const [rating, setRating] = useState(0);

  const handleRating = () => {
    if (rating < 10) {
      setRating(rating + 1);
    }
  };

  return (
    <View style={{ marginVertical: 10, padding: 10, borderWidth: 1, borderRadius: 10 }}>
      <Image source={{ uri: image }} style={{ width: '60%', height: 500, borderRadius: 10 }} />
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>{name}</Text>
      <Text>{description}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
        <Text style={{ marginRight: 10 }}>Rating: {rating}/10</Text>
        <TouchableOpacity onPress={handleRating}>
          <Text style={{ color: 'blue' }}>Rate +</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const App = () => {
  const courses = [
    {
      name: 'Software Engineering',
      description: 'Learn about software development',
      image: 'software.jpg',
    },
    {
      name: 'Business Management',
      description: 'Explore the world of business management, marketing, and finance.',
      image: 'business.jpg',
    },
    {
      name: 'Fashion Design',
      description: 'Let us dress you',
      image: 'design.jpg',
    },
    {
      name: 'Graphic Design',
      description: 'Best designs in the world',
      image: 'graphic.jpg',
    },
    {
      name: 'Film Production',
      description: 'Lets change the world',
      image: 'film.jpg',
    },
  ];

  return (
    <ScrollView>
      {courses.map((course, index) => (
        <Course key={index} {...course} />
      ))}
    </ScrollView>
  );
};

export default App;

