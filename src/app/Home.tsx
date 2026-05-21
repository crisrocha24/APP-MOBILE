import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>LifeStyle</Text>

      <Text style={styles.subtitulo}>
        Disciplina hoje, liberdade amanhã.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>
          Programação Mobile
        </Text>

        <Text style={styles.item}>
          📚 React Native
        </Text>

        <Text style={styles.item}>
          ☕ Café: 2/3
        </Text>

        <Text style={styles.item}>
          💧 Água: 2.5L
        </Text>
      </View>
    </View>
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
  },

  subtitulo: {
    color: '#EAF2E3',
    marginTop: 10,
    marginBottom: 20,
    fontSize: 18,
  },

  card: {
    backgroundColor: '#121A13',
    padding: 20,
    borderRadius: 20,
  },

  cardTitulo: {
    color: '#A3B97A',
    fontSize: 22,
    marginBottom: 15,
    fontWeight: 'bold',
  },

  item: {
    color: '#EAF2E3',
    fontSize: 16,
    marginBottom: 10,
  },
});