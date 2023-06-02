import { Tabs } from "expo-router";
import Icon from 'react-native-vector-icons/Feather';

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          href: '/',
          tabBarIcon: ({ color, size }) => (
            <Icon name="star" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="TelaA"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="TelaB"
        options={{
          href: '/null',
        }}
      />
      <Tabs.Screen
        name="Home"
        options={{
          href: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="Cadastro"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
