import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const phrases = [
  "A sorte favorece os audazes.",
  "O sucesso é a soma de pequenos esforços.",
  "Grandes conquistas começam com pequenos passos."
];

export default function FortuneCookie() {
  const [isBroken, setIsBroken] = useState(false);
  const [fortune, setFortune] = useState("");

  const breakCookie = () => {
    setIsBroken(true);
    setFortune(phrases[Math.floor(Math.random() * phrases.length)]);
  };

  return (
    <View style={styles.container}>
      <Image
        source={isBroken ? require('./assets/open_cookie.png') : require('./assets/closed_cookie.png')}
        style={styles.image}
      />
      <Text style={styles.fortune}>{isBroken ? fortune : ''}</Text>
      <Button title="Quebrar Biscoito" onPress={breakCookie} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: { width: 150, height: 150 },
  fortune: { marginTop: 20, fontSize: 18, textAlign: 'center' },
});