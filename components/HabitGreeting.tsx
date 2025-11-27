import { Text, View, StyleSheet } from "react-native";


export default function HabitGreeting({nombre = "Jesus"}) {
    const fecha = new Date();
    const hora = fecha.getHours();
    const saludo = hora < 12 ? "Buenos dias" : hora < 18 ? "Buenas tardes" : "Buenas noches";
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{saludo} {nombre ? `, ${nombre}` : ""}</Text>
            <Text style={styles.subtitle}>Hoy es {fecha.toLocaleDateString()} - {fecha.toLocaleTimeString()}</Text>
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
        color: '#475569',
    },
    subtitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#475569',
    },
})