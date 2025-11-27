import { Text, View, StyleSheet } from "react-native";

type Props = {
    title: string;
    streak: number;
    inCompleted?: boolean;
}

export default function HabitCard({title, streak, inCompleted = false}: Props) {
    return (
        <View style={[styles.card, inCompleted && styles.cardDone]}>
            <View style={styles.row}>
                <Text style={styles.title}>{title}</Text>
                {inCompleted && <Text style={styles.badge}>✔ Hoy</Text>}
                <Text style={styles.streak}>🔥 {streak} dias</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    gap: 6,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  cardDone: { borderWidth: 1, borderColor: "#22C55E" },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { fontSize: 16, fontWeight: "600", color: "#0F172A" },
  badge: { fontSize: 12, color: "#16A34A" },
  streak: { fontSize: 12, color: "#475569" },
})