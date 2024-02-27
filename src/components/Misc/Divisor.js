import styled from 'styled-components/native';
import { Colors } from '../../utils/Colors';
import { Spacing } from '../../utils/Components';

export const Line = styled.View`
	width: 100%;
	height: 2px;
	background-color: ${Colors.gray_v4};
`;

export const Divisor = () => {
	return (
		<>
			<Spacing size={20} />
			<Line />
			<Spacing size={20} />
		</>
	);
};
