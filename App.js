import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const cards = [
    {
      name: "Card 1",
      attackPower: 10,
      defense: 5,
      intelligence: 8,
    },
    {
      name: "Card 2",
      attackPower: 5,
      defense: 8,
      intelligence: 10,
    },
    {
      name: "Card 3",
      attackPower: 8,
      defense: 10,
      intelligence: 5,
    },
  ];

  return (
    <View style={styles.container}>
      {cards.map((card) => (
        <View key={card.name} style={styles.card}>
          <Text style={styles.cardTitle}>{card.name}</Text>
          <Text style={styles.cardValue}>Attack Power: {card.attackPower}</Text>
          <Text style={styles.cardValue}>Defense: {card.defense}</Text>
          <Text style={styles.cardValue}>Intelligence: {card.intelligence}</Text>
        </View>
      ))}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Troca</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    margin: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardValue: {
    fontSize: 16,
    marginBottom: 4,
  },
  button: {
    backgroundColor: '#007aff',
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});