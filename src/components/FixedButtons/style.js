import styled from 'styled-components/native';
import { Colors } from '../../utils/Colors';

export const Circle = styled.TouchableOpacity`
	top: 10%;
	left: -45%;
	border-radius: 60px;
	height: 30px;
	width: 30px;
	background-color: ${Colors.primary_v4};
	align-items: center;
	justify-content: center;
`;

export const RoundedSquare = styled.TouchableOpacity`
	position: absolute;
	bottom: 5%;
	right: 45%;
	border-radius: 7px;
	width: 60px;
	height: 60px;
	align-items: center;
	justify-content: center;
	background-color: ${Colors.primary};
`;
