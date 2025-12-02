import { View, StyleSheet } from "react-native";
import { ThemedText } from "./themed-text";
import { useThemeColor } from "@/hooks/use-theme-color";

type Props = {
  title: string;
  streak: number;
  inCompleted?: boolean;
  priority?: "high" | "medium" | "low";
}

const priorityStyles = {
  low: {
    backgroundColor: "#ECFCCB",
    color: "#3F6212",
  },
  medium: {
    backgroundColor: "#FEF9C3",
    color: "#92400E",
  },
  high: {
    backgroundColor: "#FFE4E6",
    color: "#9F1239",
  },
} as const;

export default function HabitCard({ title, streak, inCompleted = false, priority = "high" }: Props) {
  const cardBg = useThemeColor({}, "surface");
  const borderColor = useThemeColor({}, "border");
  const successColor = useThemeColor({}, "success");
  const p = priorityStyles[priority];

  return (
    <View style={[
      styles.card,
      { backgroundColor: cardBg, borderColor },
      inCompleted && { borderWidth: 2, borderColor: successColor }
    ]}>
      <View style={styles.row}>
        <ThemedText style={styles.title}>{title}</ThemedText>
        <ThemedText style={[styles.badge, { backgroundColor: p.backgroundColor, color: p.color }]}>{priority}</ThemedText>
      </View>
      <View style={styles.row}>
        <ThemedText style={styles.streak}>🔥 {streak} dias</ThemedText>
        {inCompleted && <ThemedText style={styles.badge}>✔ Hoy</ThemedText>}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 16,
    gap: 6,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { fontSize: 16, fontWeight: "600" },
  badge: { fontSize: 12 },
  streak: { fontSize: 12 },
})