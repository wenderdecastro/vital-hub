import { Colors } from '../../utils/Colors';
import { DefaultButtonText, DefaultButtonContainer, GoogleButtonContainer, GoogleButtonText } from './style'
import { AntDesign } from '@expo/vector-icons';

export const Button = ({title}) => {
    return (
		<DefaultButtonContainer>
			<DefaultButtonText>{title}</DefaultButtonText>
		</DefaultButtonContainer>
	);
}

export const GoogleButton = () => {
    return (
		<GoogleButtonContainer>
            <AntDesign name="google" size={24} color={Colors.secondary} />
			<GoogleButtonText>Entrar com google</GoogleButtonText>
		</GoogleButtonContainer>
	);
}