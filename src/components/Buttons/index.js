import { Colors } from '../../utils/Colors';
import {
	ButtonText,
	ButtonContainer,
	GoogleButtonContainer,
	GoogleButtonText,
	FilterButtonSwitchText,
	FilterButtonBox,
	ConsultationButtonBox,
	ConsultationButtonSwitchText,
} from './style';
import { AntDesign } from '@expo/vector-icons';

export const Button = ({ title, buttonFn }) => {
	return (
		<ButtonContainer onPress={buttonFn}>
			<ButtonText>{title}</ButtonText>
		</ButtonContainer>
	);
};

export const GoogleButton = () => {
	return (
		<GoogleButtonContainer>
			<AntDesign name="google" size={24} color={Colors.secondary} />
			<GoogleButtonText>Entrar com google</GoogleButtonText>
		</GoogleButtonContainer>
	);
};

export const FilterButtonSwitch = ({
	textButton,
	clickButton = false,
	onPress,
}) => {
	return (
		// Botao
		// Texto do botao
		<FilterButtonBox clickButton={clickButton} onPress={onPress}>
			<FilterButtonSwitchText clickButton={clickButton}>
				{textButton}
			</FilterButtonSwitchText>
		</FilterButtonBox>
	);
};

export const ConsultationButtonSwitch = ({
	textButton,
	clickButton = false,
	onPress,
}) => {
	return (
		// Botao
		// Texto do botao
		<ConsultationButtonBox clickButton={clickButton} onPress={onPress}>
			<ConsultationButtonSwitchText clickButton={clickButton}>
				{textButton}
			</ConsultationButtonSwitchText>
		</ConsultationButtonBox>
	);
};
