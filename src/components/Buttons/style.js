import styled, { css } from 'styled-components';
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

export const ButtonTabStyle = styled.TouchableOpacity`
	width: 30%;
	align-items: center;
	padding: 12px 0px;
	border-radius: 5px;

	/* Se o botao estiver cliclado, aplica-se um fundo azul, caso contrario, fundo transparente */
	${(props) =>
		props.clickButton
			? css`
					background-color: ${Colors.secondary};
			  `
			: css`
					background-color: transparent;
					border: 2px solid ${Colors.secondary_v2};
			  `}
`;

export const SwitchButtonText = styled.Text`
	font-size: 12px;
	font-family: ' MontserratAlternates_600SemiBold';

	${(props) =>
		props.clickButton
			? css`
					color: #fbfbfb;
			  `
			: css`
					color: #607ec5;
			  `}
`;

export const FilterContainer = styled.View`
	width: 90%;
	flex-direction: row;
	justify-content: space-between;
	margin-top: 38px;
`;
