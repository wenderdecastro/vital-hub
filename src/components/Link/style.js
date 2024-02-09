import styled from 'styled-components/native';
import { Colors } from '../../utils/Colors';
import { BoldText } from '../Text/style';

export const Link = styled(BoldText)`
	color: ${Colors.secondary_v1};
	text-decoration: underline;
	margin-top: 30px;
`;

export const ForgotPasswordLink = styled(Link)`
	font-size: 16px;
	font-family: 'MontserratAlternates_500Medium';
	color: ${Colors.gray_v4};
	align-self: flex-start;
	margin: 0;
`;
