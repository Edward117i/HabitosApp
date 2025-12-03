import { Text, View, StyleSheet } from "react-native";
import { useThemeColor } from "@/hooks/use-theme-color";


export default function HabitGreeting({ nombre = "Jesus" }) {
    const fecha = new Date();
    const hora = fecha.getHours();
    const saludo = hora < 12 ? "Buenos dias" : hora < 18 ? "Buenas tardes" : "Buenas noches";

    const text = useThemeColor({}, "text");
    const muted = useThemeColor({}, "muted");

    return (
        <View style={styles.container}>
            <Text style={[styles.title, { color: text }]}>{saludo} {nombre ? `, ${nombre}` : ""}</Text>
            <Text style={[styles.subtitle, { color: muted }]}>Hoy es {fecha.toLocaleDateString()} - {fecha.toLocaleTimeString()}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 4,
        marginBottom: 16,
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
    },
    subtitle: {
        fontSize: 16,
        fontWeight: '600',
    },
})