import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const ContadorRestauranteApp = () => {
	const [numPessoas, setNumPessoas] = useState(0); // Estado para contar o número de pessoas

	// Função para adicionar uma pessoa (entrada)
	const handleEntrada = () => {
		setNumPessoas((prevNum) => prevNum + 1);
	};

	// Função para remover uma pessoa (saída)
	const handleSaida = () => {
		setNumPessoas((prevNum) => (prevNum > 0 ? prevNum - 1 : 0)); // Não deixa o número ser negativo
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Contador de Pessoas no Restaurante</Text>

			<Text style={styles.counter}>{numPessoas}</Text>

			<View style={styles.buttonContainer}>
				{/* Botão para incrementar o número de pessoas */}
				<TouchableOpacity style={styles.button} onPress={handleEntrada}>
					<Text style={styles.buttonText}>Entrada</Text>
				</TouchableOpacity>

				{/* Botão para decrementar o número de pessoas */}
				<TouchableOpacity style={styles.button} onPress={handleSaida}>
					<Text style={styles.buttonText}>Saída</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

// Estilos
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f5f5f5',
	},
	title: {
		fontSize: 24,
		marginBottom: 20,
		textAlign: 'center',
	},
	counter: {
		fontSize: 48,
		fontWeight: 'bold',
		marginBottom: 20,
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: '60%',
	},
	button: {
		backgroundColor: '#007BFF',
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 5,
	},
	buttonText: {
		color: '#fff',
		fontSize: 18,
	},
});

export default ContadorRestauranteApp;