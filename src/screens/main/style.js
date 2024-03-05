import styled from 'styled-components/native';
import { Colors } from '../../utils/Colors';
export const ContentIcon = styled.View`
	border-radius: 18px;
	padding: 9px 12px;
	background-color: ${(props) => `${props.tabBarActiveBackgroundColor}`};

	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 5px;

	background-color: ${Colors.secondary_v4};
`;

export const TextIcon = styled.Text`
	font-size: 14px;
	font-family: 'Quicksand_500Medium';
`;
