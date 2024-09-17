import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function RestaurantCounterApp() {
  const [peopleCount, setPeopleCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.count}>Pessoas no restaurante: {peopleCount}</Text>
      <Button title="Entrou" onPress={() => setPeopleCount(peopleCount + 1)} />
      <Button title="Saiu" onPress={() => setPeopleCount(peopleCount - 1)} disabled={peopleCount === 0} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  count: { fontSize: 24, marginBottom: 20 }
});