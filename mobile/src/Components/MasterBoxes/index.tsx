import React from 'react';

import { CardContainer,CardItem, Title, Description, Container, CardHeader, CardContent, CardFooter, Annotation } from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function MasterBoxes(){
	return(
					<Container>
						<CardContainer>
						<CardItem>
							<CardHeader>
								<Icon name="attach-money" size={28} color="#666" />
								<Icon name="visibility-off" size={28} color="#666" />
							</CardHeader>
							<CardContent>
								<Title>Saldo disponível</Title>
								<Description>R$ 197.611,65</Description>
							</CardContent>
							<CardFooter>
								<Annotation>
									Transferencia de R$ 20,00 recebida
								</Annotation>
							</CardFooter>
						</CardItem>
						<CardItem>
							<CardHeader>
								<Icon name="attach-money" size={28} color="#666" />
								<Icon name="visibility-off" size={28} color="#666" />
							</CardHeader>
							<CardContent>
								<Title>Saldo disponível</Title>
								<Description>R$ 197.611,65</Description>
							</CardContent>
							<CardFooter>
								<Annotation>
									Transferencia de R$ 20,00 recebida
								</Annotation>
							</CardFooter>
							</CardItem>
						</CardContainer>
					</Container>
	)
}