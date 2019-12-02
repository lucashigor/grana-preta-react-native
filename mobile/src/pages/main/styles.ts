import styled from "styled-components/native";
import { Animated } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
	background: #3D3D3D;
	padding-top: ${getStatusBarHeight()}px;
	justify-content: center;
`;

export const Content = styled.View`
	flex: 1;
	max-height: 400px;
	z-index: 5;
`;

	export const Card = styled(Animated.View)`
  flex: 1;
	height: 100%;
	position: absolute;
	left: 0;
	right: 0;
	top: 0px;
`;


