import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Menu from '@/components/Menu';

export default function Index() {
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={{ uri: 'https://wallpaperaccess.com/full/328526.jpg' }}
    >
      <Menu />
    </ImageBackground>
  );
}
