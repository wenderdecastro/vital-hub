import styled from 'styled-components/native';
import { Colors } from '../../utils/Colors';

export const Input = styled.TextInput.attrs((props) => ({
	placeholderTextColor: props.isReadOnly ? Colors.gray_v1 : Colors.primary_v1,
	readOnly: props.isReadOnly ? true : false,
}))`
	border-radius: 5px;
	border: ${(props) => (props.isReadOnly ? 0 : 2)}px;
	border-color: ${(props) =>
		props.isReadOnly ? Colors.transparent : Colors.primary};
	width: 100%;
	height: 55px;
	color: ${(props) =>
		props.isReadOnly ? Colors.gray_v1 : Colors.primary_v2};
	font-size: 16px;
	font-family: ${(props) =>
		props.isReadOnly
			? 'MontserratAlternates_500Medium'
			: 'MontserratAlternates_600SemiBold'};
	padding: 15px;
	background-color: ${(props) =>
		props.isReadOnly ? Colors.white_v1 : Colors.transparent};
	margin-top: 10px;
`;

export const LargeInput = styled(Input)`
	text-align-vertical: top;
	height: ${(props) => props.InputHeight}%;
`;
