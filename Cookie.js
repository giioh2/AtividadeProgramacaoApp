import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

//  Frases do biscoito da sorte
const phrases = [
	'A vida trará coisas boas se tiver paciência.',
	'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
	'Não compense na ira o que lhe falta na razão.',
	'Defeitos e virtudes são apenas dois lados da mesma moeda.',
	'A maior de todas as torres começa no solo.',
	'Não há que ser forte. Há que ser flexível.',
	'Gente todo dia arruma os cabelos, por que não o coração?',
	'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
	'A juventude não é uma época da vida, é um estado de espírito.',
	'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
];

const FortuneCookieApp = () => {
	const [isBroken, setIsBroken] = useState(false);
	const [fortune, setFortune] = useState('');

	// Função para quebrar o biscoito e mostrar a frase
	const breakCookie = () => {
		const randomIndex = Math.floor(Math.random() * phrases.length);
		setFortune(phrases[randomIndex]);
		setIsBroken(true);
	};

	// Função para resetar o biscoito
	const resetCookie = () => {
		setIsBroken(false);
		setFortune('');
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Quebre o Biscoito da Sorte</Text>

			<Image
				source={
					isBroken
						? require('../assets/cookie_broken.png') // Biscoito quebrado
						: require('../assets/cookie_closed.png') // Biscoito fechado
				}
				style={styles.cookieImage}
			/>

			{/* Exibe a frase de sorte se o biscoito estiver quebrado */}
			{isBroken && <Text style={styles.fortuneText}>{fortune}</Text>}

			{/* Botão de quebrar o biscoito ou resetar */}
			<TouchableOpacity
				style={styles.button}
				onPress={isBroken ? resetCookie : breakCookie}
			>
				<Text style={styles.buttonText}>
					{isBroken ? 'Tentar de Novo' : 'Quebrar o Biscoito'}
				</Text>
			</TouchableOpacity>
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
	},
	cookieImage: {
		width: 200,
		height: 200,
		marginBottom: 20,
	},
	fortuneText: {
		fontSize: 18,
		fontStyle: 'italic',
		textAlign: 'center',
		marginBottom: 20,
		paddingHorizontal: 20,
	},
	button: {
		backgroundColor: '#CCC',
		paddingVertical: 10,
		paddingHorizontal: 30,
		borderRadius: 5,
	},
	buttonText: {
		color: '#fff',
		fontSize: 18,
	},
});

export default FortuneCookieApp;