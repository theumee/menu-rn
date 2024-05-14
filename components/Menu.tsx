import * as React from 'react';
import { Avatar, List, MD3Colors } from 'react-native-paper';

const Menu = () => (
  <List.Section style={{ flex: 1, margin: 0 }}>
    <List.Subheader
      style={{
        flex: 1,
        padding: 50,
        backgroundColor: '#F2DD68',
      }}
    >
      <Avatar.Icon icon='microsoft' />
    </List.Subheader>
    <List.Item
      style={{ padding: 20, backgroundColor: '#F2DD68' }}
      title='Home'
      left={() => <List.Icon icon='home-circle' />}
    />
    <List.Item
      style={{ padding: 20, backgroundColor: '#F2DD68' }}
      title='Feed'
      left={() => <List.Icon icon='playlist-play' />}
    />
    <List.Item
      style={{ padding: 20, backgroundColor: '#F2DD68', elevation: 1 }}
      title='Messages'
      left={() => <List.Icon icon='android-messages' />}
    />
    <List.Item
      style={{
        width: '90%',
        backgroundColor: '#EFC765',
        padding: 20,
        elevation: 2,
      }}
      title='Photos'
      left={() => <List.Icon icon='camera-image' />}
    />
    <List.Item
      style={{
        width: '80%',
        backgroundColor: '#F3B166',
        padding: 20,
        elevation: 3,
      }}
      title='Places'
      left={() => <List.Icon icon='map-marker' />}
    />
    <List.Item
      style={{
        width: '70%',
        backgroundColor: '#EF9963',
        padding: 20,
        elevation: 4,
      }}
      title='Notifications'
      left={() => <List.Icon icon='bell-badge' />}
    />
    <List.Item
      title='Profile'
      style={{
        width: '60%',
        backgroundColor: '#E98269',
        padding: 20,
        elevation: 5,
      }}
      left={() => <List.Icon icon='account' />}
    />
  </List.Section>
);

export default Menu;
