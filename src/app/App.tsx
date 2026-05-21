import React from 'react';
import { SafeAreaView, Text, StyleSheet,View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>LifeStyle</Text>

      <Text style={styles.subtitulo}>
        Água, Café e Disciplina
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>
          Progresso do Dia
        </Text>

        <Text style={styles.item}>
          ✅ Estudar Programação Mobile
        </Text>

        <Text style={styles.item}>
          ☕ Café: 2/3
        </Text>

        <Text style={styles.item}>
          💧 Água: 2,5L
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0F0C',
    padding: 20,
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#6B8E23',
    marginBottom: 10,
  },

  subtitulo: {
    fontSize: 18,
    color: '#EAF2E3',
    marginBottom: 25,
  },

  card: {
    backgroundColor: '#121A13',
    padding: 20,
    borderRadius: 20,
  },

  cardTitulo: {
    fontSize: 22,
    color: '#A3B97A',
    marginBottom: 15,
    fontWeight: 'bold',
  },

  item: {
    color: '#EAF2E3',
    fontSize: 16,
    marginBottom: 10,
  },
});