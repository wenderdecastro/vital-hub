import styled from 'styled-components/native';
import { Colors } from '../../utils/Colors';
import { FlatList } from 'react-native';

export const CardList = styled(FlatList)`
	width: 100%;
	flex-grow: 0;
	height: 60%;

	margin-top: 8%;
`;

export const Card = styled.View`
	height: 115px;
	elevation: 5;
	width: 100%;
	align-items: center;
	justify-content: center;
	border-radius: 5px;
	background-color: white;
	margin-bottom: 15px;
`;

export const ProfileImage = styled.Image`
	height: 80px;
	aspect-ratio: 1/1;
	width: auto;
	object-fit: cover;
	border-radius: 5px;
`;

export const CardContent = styled.View`
	width: 90%;
	align-items: center;
	justify-content: center;
	height: 80%;
	gap: 10px;
	flex-direction: row;
`;

export const ClockBox = styled.View`
	flex-direction: row;
	background-color: ${(props) => props.boxColor};
	justify-content: center;
	align-items: center;
	width: 120px;
	padding: 7px;
	height: 100%;
	border-radius: 5px;
	align-self: flex-start;
	gap: 5px;
`;

export const CardContentBox = styled.View`
	width: 100%;
	align-items: center;
	justify-content: space-between;
	text-align: center;
	flex-direction: row;
	flex: 1;
`;

export const CardTextBox = styled.View`
	width: 100%;
	align-items: flex-start;
	justify-content: space-between;
	flex: 2;
`;
