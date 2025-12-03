import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import HabitGreeting from '@/components/HabitGreeting';
import HabitCard from '@/components/HabitCard';
import Screen from '@/components/Screen';
import ProfileHeader from '@/components/profileHeader';
import React, { useCallback, useMemo, useState } from 'react';
import { useThemeColor } from '@/hooks/use-theme-color';
import { ThemedText } from '@/components/themed-text';

type Habit = {
  id: string;
  title: string;
  streak: number;
  isCompleted: boolean;
  priority: "low" | "medium" | "high";
};

const INITIAL: Habit[] = [
  {
    id: "h1",
    title: "Beber agua",
    streak: 3,
    isCompleted: true,
    priority: "medium",
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

  const [items, setItems] = useState<Habit[]>(INITIAL)
  const [nuevo, setNuevo] = useState("")

  const border = useThemeColor({}, "border");
  const success = useThemeColor({}, "success");
  const primary = useThemeColor({}, "primary");
  const onPrimary = useThemeColor({}, "onPrimary");
  const text = useThemeColor({}, "text");
  const muted = useThemeColor({}, "muted");

  const surface = useThemeColor({}, "surface");


  // const toggle = useCallback((id: string) => {
  //   setItems((prev) => prev.map((item) => item.id === id ? { ...item, isCompleted: !item.isCompleted } : item))
  // }, [])
  const toggle = useCallback((id: string) => {
    setItems(prev => prev.map(h => {
      if (h.id !== id) return h;
      const complete = !h.isCompleted;
      return {
        ...h,
        isCompleted: complete,
        streak: complete ? h.streak + 1 : Math.max(0, h.streak - 1),
      };
    })
    );
  }, []);

  const addHabit = useCallback(() => {
    const title = nuevo.trim();
    if (!title) return;
    setItems(prev => [
      {
        id: `h${Date.now()}`,
        title,
        streak: 0,
        isCompleted: false,
        priority: "low",
      },
      ...prev,
    ]);
    setNuevo("");
  }, [nuevo]);

  const total = items.length;
  const complete = useMemo(() => items.filter(h => h.isCompleted).length, [items]);

  return (
    <Screen>
      <ProfileHeader name="Jesus Eduardo" role="Programador" />
      <HabitGreeting nombre="Jesus" />
      <View style={[styles.row, { alignItems: "center" }]}>
        <TextInput value={nuevo} onChangeText={setNuevo}
          placeholder="Nuevo hábito (eje Meditar"
          onSubmitEditing={addHabit}
          style={[styles.input, { backgroundColor: surface, borderColor: border, color: text }
          ]}

        />
        <Pressable
          onPress={addHabit}
          style={[styles.addBtn, { backgroundColor: primary }]
          }>
          <ThemedText>Añadir</ThemedText>
        </Pressable>

      </View>
      <View style={{ gap: 12 }}>
        {items.map((habit) => (
          <HabitCard
            key={habit.id}
            title={habit.title}
            streak={habit.streak}
            isCompleted={habit.isCompleted}
            priority={habit.priority}
            onToggle={() => toggle(habit.id)}
          />
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
  row: { flexDirection: "row", gap: 8 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  addBtn: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },

});
