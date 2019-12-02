import React from 'react';

import { Container, Nav, NavText } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Menu({ translateY }) {
	return (
		<Container style={{
			opacity: translateY.interpolate({
				inputRange: [0,150],
				outputRange: [0,1],
			}),
		}}>
			<Nav>
				<Icon name="help-outline"size={20} color="#FFF"/>
				<NavText>Me ajuda</NavText>
			</Nav>
			<Nav>
				<Icon name="person-outline"size={20} color="#FFF"/>
				<NavText>Perfil</NavText>
			</Nav>
			<Nav>
				<Icon name="credit-card"size={20} color="#FFF"/>
				<NavText>Configurar Cartão</NavText>
			</Nav>
			<Nav>
				<Icon name="smartphone"size={20} color="#FFF"/>
				<NavText>Configurações do App</NavText>
			</Nav>
		</Container>
	);
}