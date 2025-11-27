import { ejemploDestructuracionUsuario } from '@/utils/math';
import { Link } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';
import HabitGreeting from '@/components/HabitGreeting';
import HabitCard from '@/components/HabitCard';

export default function HomeScreen() {
  const nombre = "Jesus Eduardo";
  const edad = 25; 
  const genero = "Masculino";
  const casado = false;
  const hijos = 1;
  const mascotas = 1;
  const profesion = "Programador";
  const salario = 1000000;
  const ispremium = true;
  const messeges = 10;
  const fecha = new Date();
  const hora = fecha.getHours();
  const saludo = hora < 12 ? "Buenos dias" : hora < 18 ? "Buenas tardes" : "Buenas noches";
  
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
    <View style={styles.container}>
      <HabitGreeting nombre="Jesus"/>
      <View style={ {gap: 12}}> 
      {habitos.map((habit) => (
        <HabitCard key={habit.id} {...habit} />
      ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F2F6FF',
    padding: 24,
    gap: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0F172A',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#334155',
  },
});
