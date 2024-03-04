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
export const AlignedText = styled(RawText)`
	text-decoration: none;
	margin-top: 0;
	align-self: flex-start;
`;

export const ThinText = styled(RawText)`
	font-family: 'Quicksand_400Regular';
	color: ${(props) => (props.textColor ? props.textColor : Colors.gray_v4)};
	margin: 0;
	font-size: ${(props) => (props.fontSize ? props.fontSize : 16)}px;
`;

export const MediumText = styled(RawText)`
	font-family: 'MontserratAlternates_500Medium';
`;

export const AltText = styled(RawText)`
	font-family: 'MontserratAlternates_600SemiBold';
	font-size: ${(props) => (props.fontSize ? props.fontSize : 18)}px;
	margin-top: 0;
`;

export const Label = styled(AltText)`
	font-family: 'Quicksand_600SemiBold';
	font-size: ${(props) => (props.fontSize ? props.fontSize : 18)}px;
	margin-top: 20px;
	align-self: flex-start;
`;
