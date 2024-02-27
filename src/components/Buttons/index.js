import { Colors } from '../../utils/Colors';
import {
	ButtonText,
	ButtonContainer,
	GoogleButtonContainer,
	GoogleButtonText,
	SwitchButtonText,
	ButtonTabStyle,
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

export const ThreeButtonSwitch = ({
	textButton,
	clickButton = false,
	onPress,
}) => {
	return (
		// Botao
		// Texto do botao
		<ButtonTabStyle clickButton={clickButton} onPress={onPress}>
			<SwitchButtonText clickButton={clickButton}>
				{textButton}
			</SwitchButtonText>
		</ButtonTabStyle>
	);
};
