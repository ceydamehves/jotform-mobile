/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import FormScreen from '../screens/FormScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen';

import { SignParamList, BottomTabParamList, HomeParamList, SettingsParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="SignUp"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="settings" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

const Sign = createStackNavigator<SignParamList>();

export default function Navigator() {
  return (
    <Sign.Navigator>
      <Sign.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ headerTitle: 'Sign Up',
                   headerTintColor: '#0099FF',
                   headerTitleAlign: 'center' }}
      />
      <Sign.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{ headerTitle: 'Sign In',
                   headerTintColor: '#0099FF',
                   headerTitleAlign: 'center' }}
      />
      <Sign.Screen
        name="HomeScreen"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
    </Sign.Navigator>
  );
}

function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: 'Welcome!',
                   headerLeft: null,
                   headerTintColor: '#0099FF',
                   headerTitleStyle: {fontSize: 28}}}
      />
      <HomeStack.Screen
        name="FormScreen"
        component={FormScreen}
        options={{ headerTitle: 'Questions',
                   headerTintColor: '#0099FF', }}
      />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator<SettingsParamList>();

function SettingsNavigator() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{ headerTitle: 'Settings',
                   headerLeft: null,
                   headerTintColor: '#0099FF',
                   headerTitleAlign: 'center' }}
      />
    </SettingsStack.Navigator>
  );
}
