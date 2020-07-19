import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//Screen
import Home from '../screens/Home';
import Movie from '../screens/Movie';
import News from '../screens/News';
import Popular from '../screens/Popular';
import Search from '../screens/Search';

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{title: 'MovieApp'}}
      />
      <Stack.Screen name="movie" component={Movie} options={{title: ''}} />
      <Stack.Screen
        name="news"
        component={News}
        options={{title: 'New Movies'}}
      />
      <Stack.Screen
        name="Popular"
        component={Popular}
        options={{title: 'Popular Movies'}}
      />
      <Stack.Screen name="search" component={Search} options={{title: ''}} />
    </Stack.Navigator>
  );
}
