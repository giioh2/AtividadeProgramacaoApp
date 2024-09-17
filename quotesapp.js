import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const quotes = [
  { text: "A vida é o que acontece quando você está ocupado fazendo outros planos.", author: "John Lennon", image: require('./assets/lennon.jpg') },
  { text: "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.", author: "Winston Churchill", image: require('./assets/churchill.jpg') }
];

export default function QuotesApp() {
  const [quote, setQuote] = useState(quotes[0]);

  const changeQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  };

  return (
    <View style={styles.container}>
      <Image source={quote.image} style={styles.image} />
      <Text style={styles.text}>{quote.text}</Text>
      <Text style={styles.author}>{quote.author}</Text>
      <Button title="Nova Citação" onPress={changeQuote} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: { width: 100, height: 100, borderRadius: 50 },
  text: { fontSize: 18, textAlign: 'center', marginVertical: 10 },
  author: { fontSize: 16, fontStyle: 'italic' }
});