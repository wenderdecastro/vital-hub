import styled from 'styled-components/native';
import { Colors } from '../../utils/Colors';

export const Input = styled.TextInput.attrs({
	placeholderTextColor: Colors.primary_v1,
})`
	border-radius: 5px;
	border: 2px ${Colors.primary};
	width: 100%;
	height: 55px;
	color: ${Colors.primary_v1};
	font-size: 16px;
	font-family: 'MontserratAlternates_600SemiBold';
	padding: 15px;
	margin-top: 5%;
`;

export const AltInput = styled(Input)`
	border-radius: 5px;
	border: none;
	width: 100%;
	height: 55px;
	color: ${Colors.gray_v1};
	font-size: 16px;
	font-family: 'MontserratAlternates_500Medium';
	padding: 15px;
	margin-top: 10px;
	background-color: ${Colors.white_v1};
`;
