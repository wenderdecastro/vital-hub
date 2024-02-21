import styled from 'styled-components/native';
import { Colors } from '../../utils/Colors';
import { AltText } from '../Text/style';

export const Link = styled(AltText)`
	color: ${Colors.secondary_v1};
	text-decoration: underline;
	margin-top: 30px;
`;

export const AltLink = styled(Link)`
	font-size: 16px;
	font-family: 'MontserratAlternates_500Medium';
	color: ${(props) => (props.linkColor ? props.linkColor : Colors.gray_v4)};
	align-self: flex-start;
	margin: 0;
	text-decoration-line: ${(props) =>
		props.textDecoration ? props.textDecoration : 'underline'};
`;
