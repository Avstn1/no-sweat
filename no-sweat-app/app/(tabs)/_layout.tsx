import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];
  const blurTint = colorScheme === 'dark' ? 'dark' : 'light';

  // Semi-transparent dark blue
  const tabBarColor = colorScheme === 'dark'
    ? 'rgba(10, 25, 45, 0.75)' // dark blue with transparency
    : 'rgba(20, 40, 60, 0.85)'; // slightly lighter for light mode

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarActiveTintColor: theme.tint,
        tabBarInactiveTintColor: colorScheme === 'dark' ? '#aaa' : '#777',
        tabBarShowLabel: true,

        tabBarStyle: {
          position: 'absolute',
          bottom: Platform.OS === 'ios' ? 40 : 20,
          left: 20,
          right: 20,
          height: 70,
          borderRadius: 35,
          borderWidth: 0,
          elevation: 12,
          backgroundColor: tabBarColor,
          shadowColor: '#0ff',
          shadowOpacity: 0.15,
          shadowRadius: 18,
          shadowOffset: { width: 0, height: 6 },
        },

        tabBarBackground: () =>
          Platform.OS === 'ios' ? (
            <BlurView
              tint={blurTint}
              intensity={60} // slightly lighter blur
              style={StyleSheet.absoluteFill}
            />
          ) : null,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <IconSymbol
              size={30}
              name="house.fill"
              color={color}
              style={{ textShadowColor: '#0ff', textShadowRadius: 6 }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => (
            <IconSymbol
              size={30}
              name="paperplane.fill"
              color={color}
              style={{ textShadowColor: '#0ff', textShadowRadius: 6 }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
