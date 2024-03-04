import styled, { css } from 'styled-components';
import { Colors } from '../../utils/Colors';

export const ButtonContainer = styled.TouchableOpacity`
	width: 100%;
	height: 55px;
	align-items: center;
	justify-content: center;
	background-color: ${Colors.secondary};
	border-radius: 8px;
	margin-top: 30px;
`;

export const AltButtonContainer = styled.TouchableOpacity`
	width: 50%;
	height: 55px;
	align-items: center;
	justify-content: center;
	background-color: ${(props) =>
		props.buttonColor ? props.buttonColor : Colors.primary};
	border-radius: 8px;
`;

export const GoogleButtonContainer = styled(ButtonContainer)`
	background-color: ${Colors.white};
	border: 1px ${Colors.secondary};
	flex-direction: row;
	gap: 30px;
	margin-top: 15px;
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

export const FilterButtonBox = styled.TouchableOpacity`
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

export const FilterButtonSwitchText = styled.Text`
	font-size: 12px;
	font-family: 'MontserratAlternates_600SemiBold';

	${(props) =>
		props.clickButton
			? css`
					color: #fbfbfb;
			  `
			: css`
					color: #607ec5;
			  `}
`;

export const SwitchContainer = styled.View`
	width: ${(props) => (props.rowWidth ? props.rowWidth : 88)}%;
	flex-direction: row;
	justify-content: space-between;
	padding-top: 5px;
`;

export const ConsultationButtonBox = styled.TouchableOpacity`
	width: 30%;
	align-items: center;
	padding: 12px 0px;
	border-radius: 5px;

	/* Se o botao estiver cliclado, aplica-se um fundo azul, caso contrario, fundo transparente */
	${(props) =>
		props.clickButton
			? css`
					background-color: ${Colors.primary};
			  `
			: css`
					background-color: transparent;
					border: 2px solid ${Colors.primary_v2};
			  `}
`;

export const ConsultationButtonSwitchText = styled.Text`
	font-size: 12px;
	font-family: 'MontserratAlternates_600SemiBold';

	${(props) =>
		props.clickButton
			? css`
					color: #fbfbfb;
			  `
			: css`
					color: #60bfc5;
			  `}
`;
