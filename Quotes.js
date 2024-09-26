import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import quotes from '../assets/quotes.json';

const QuotesApp = () => {
	const [currentQuote, setCurrentQuote] = useState(quotes[0]);

	// Função para exibir uma nova citação aleatória
	const getRandomQuote = () => {
		const randomIndex = Math.floor(Math.random() * quotes.length);
		setCurrentQuote(quotes[randomIndex]);
	};
	// Retorno do componente
	return (
		<View style={styles.container}>
			<Text style={styles.quoteText}>"{currentQuote.quote}"</Text>
			<Text style={styles.authorText}>- {currentQuote.author}</Text>
			<Image source={{ uri: currentQuote.image }} style={styles.authorImage} />
			<Button title='Nova Citação' onPress={getRandomQuote} />
		</View>
	);
};

// Estilos
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
		backgroundColor: '#f5f5f5',
	},
	quoteText: {
		fontSize: 24,
		fontStyle: 'italic',
		textAlign: 'center',
		marginBottom: 20,
	},
	authorText: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 20,
		textAlign: 'center',
	},
	authorImage: {
		width: 150,
		height: 150,
		borderRadius: 75,
		marginBottom: 20,
	},
});

export default QuotesApp;