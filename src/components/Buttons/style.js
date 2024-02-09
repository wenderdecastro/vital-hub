import styled from 'styled-components/native';
import { Colors } from '../../utils/Colors';

export const ButtonContainer = styled.TouchableOpacity`
	width: 100%;
	height: 55px;
	align-items: center;
	justify-content: center;
	background-color: ${Colors.secondary};
	border-radius: 8px;
	margin-top: 10%;
`;

export const GoogleButtonContainer = styled(ButtonContainer)`
	background-color: ${Colors.white};
	border: 1px ${Colors.secondary};
	flex-direction: row;
	gap: 30px;
	margin-top: 5%;
`;

export const ButtonText = styled.Text`
	font-family: 'MontserratAlternates_700Bold';
	font-size: 16px;
	text-align: center;
	color: ${Colors.white};
	text-transform: uppercase;
`;

export const GoogleButtonText = styled(ButtonText)`
	color: ${Colors.secondary};
`;
