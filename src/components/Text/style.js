import styled from 'styled-components/native';
import { Colors } from '../../utils/Colors';

export const RawText = styled.Text`
	font-family: 'Quicksand_500Medium';
	font-size: ${(props) => (props.fontSize ? props.fontSize : 20)}px;
	color: ${(props) => (props.textColor ? props.textColor : Colors.gray)};
	text-decoration: none;
	margin-top: 15px;
	text-align: center;
`;

export const ThinText = styled(RawText)`
	font-family: 'Quicksand_400Regular';
	color: ${(props) => (props.textColor ? props.textColor : Colors.gray_v4)};
	margin: 0;
	font-size: 16px;
`;

export const MediumText = styled(RawText)`
	font-family: 'MontserratAlternates_500Medium';
`;

export const AltText = styled(RawText)`
	font-family: 'MontserratAlternates_600SemiBold';
	font-size: 18px;
	margin-top: 0;
`;

export const Label = styled(AltText)`
	font-family: 'Quicksand_600SemiBold';
	font-size: 18px;
	margin-top: none;
	align-self: flex-start;
`;
