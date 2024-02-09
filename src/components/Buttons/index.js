import { Colors } from '../../utils/Colors';
import {
	ButtonText,
	ButtonContainer,
	GoogleButtonContainer,
	GoogleButtonText,
} from './style';
import { AntDesign } from '@expo/vector-icons';

export const Button = ({ title }) => {
	return (
		<ButtonContainer>
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
