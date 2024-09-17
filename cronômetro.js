import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function StopwatchApp() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => setTime(prev => prev + 10), 10);
    } else if (!running) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [running]);

  const reset = () => {
    setTime(0);
    setRunning(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.time}>
        {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
        {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
        {("0" + ((time / 10) % 100)).slice(-2)}
      </Text>
      <Button title={running ? "Pausar" : "Iniciar"} onPress={() => setRunning(!running)} />
      <Button title="Reiniciar" onPress={reset} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  time: { fontSize: 48, fontWeight: 'bold', marginBottom: 20 }
});