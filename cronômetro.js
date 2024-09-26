import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const CronometroApp = () => {
	const [time, setTime] = useState(0); // Estado para armazenar o tempo em milissegundos
	const [isRunning, setIsRunning] = useState(false); // Estado para controlar se o cronômetro está rodando
	const intervalRef = useRef(null); // Referência para o intervalo

	// Função para formatar o tempo em minutos, segundos e milissegundos
	const formatTime = (time) => {
		const minutes = Math.floor(time / 60000);
		const seconds = Math.floor((time % 60000) / 1000);
		const milliseconds = Math.floor((time % 1000) / 10);
		return `${minutes < 10 ? '0' : ''}${minutes}:${
			seconds < 10 ? '0' : ''
		}${seconds}:${milliseconds < 10 ? '0' : ''}${milliseconds}`;
	};

	// Função para iniciar o cronômetro
	const start = () => {
		if (!isRunning) {
			setIsRunning(true);
			intervalRef.current = setInterval(() => {
				setTime((prevTime) => prevTime + 10);
			}, 10);
		}
	};

	// Função para pausar o cronômetro
	const pause = () => {
		if (isRunning) {
			setIsRunning(false);
			clearInterval(intervalRef.current);
		}
	};

	// Função para reiniciar o cronômetro
	const reset = () => {
		setIsRunning(false);
		clearInterval(intervalRef.current);
		setTime(0);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.time}>{formatTime(time)}</Text>
			<View style={styles.buttons}>
				<Button
					title={isRunning ? 'Pausar' : 'Iniciar'}
					onPress={isRunning ? pause : start}
				/>
				<Button title='Reiniciar' onPress={reset} />
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
		backgroundColor: '#fff',
	},
	time: {
		fontSize: 48,
		fontWeight: 'bold',
		marginBottom: 20,
	},
	buttons: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '60%',
	},
});

export default CronometroApp;