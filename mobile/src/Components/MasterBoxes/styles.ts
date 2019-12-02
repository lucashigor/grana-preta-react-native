import styled from "styled-components/native";
import { Animated } from 'react-native';

export const Container = styled.View``;

export const CardHeader = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 30px;
`;

export const CardContainer = styled.ScrollView.attrs({
	horizontal: true,
	contentContainerStyle: { paddingLeft: 10, paddingRigth: 20},
	showsHorizontalScrollIndicator: false
})``;

export const CardItem = styled.View`
	height: 100%;
	background: #FFF
	margin-left: 10px;
	padding: 10px;
	justify-content: space-between;
`;

export const CardContent = styled.View`
	flex: 1;
	justify-content: center;
	padding: 30px;
`;

export const Title = styled.Text`
	font-size: 13px;
	color: #999;
`;

	export const Description = styled.Text`
	font-size: 32px;
	margin-top: 3px;
	color: #333;
	`;

	export const CardFooter = styled.View`
	padding: 30px;
	background: #eee;
	border-radius: 4px
`;
export const Annotation = styled.Text`
	font-size: 12px;
	color:#333
`;