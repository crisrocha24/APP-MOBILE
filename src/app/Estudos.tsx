
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Bem vindo ao React Native!</Text>
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