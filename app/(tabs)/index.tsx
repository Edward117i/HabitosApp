import { StyleSheet, View } from 'react-native';
import HabitGreeting from '@/components/HabitGreeting';
import HabitCard from '@/components/HabitCard';
import Screen from '@/components/Screen';
import ProfileHeader from '@/components/profileHeader';
import { useState } from 'react';

type Habit = {
  id: string;
  title: string;
  streak: number;
  isCompleted: boolean;
  priority: "low" | "mid" | "high";
};

const INITIAL: Habit[] = [
  {
    id: "h1",
    title: "Beber agua",
    streak: 3,
    isCompleted: true,
    priority: "mid",
  },
  {
    id: "h2",
    title: "Leer 10 min",
    streak: 1,
    isCompleted: false,
    priority: "low",
  },
  {
    id: "h3",
    title: "Caminar 15 min",
    streak: 7,
    isCompleted: false,
    priority: "high",
  },
];

export default function HomeScreen() {
  
  const [items, setItems ] = useState<Habit[]>(INITIAL)
  const [nuevo, setNuevo] = useState()
  
  const habitos = [
      {
        id: 1,
        title: "Beber Agua",
        streak: 1,
        inCompleted: true,
      },
      {
        id: 2,
        title: "Correr",
        streak: 2,
        inCompleted: false,
      },
      {
        id: 3,
        title: "Leer",
        streak: 3,
      },
    ]
    
    return (
      <Screen>
        <ProfileHeader name="Jesus Eduardo" role="Programador" />
        <HabitGreeting nombre="Jesus"/>
        <View style={ {gap: 12}}> 
        {habitos.map((habit) => (
          <HabitCard key={habit.id} {...habit} />
        ))}
        </View>
      </Screen>
    );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F2F6FF",
    padding: 24,
    gap: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#0F172A",
  },
  subtitle: {
    fontSize: 14,
    color: "#334155",
  },
});
