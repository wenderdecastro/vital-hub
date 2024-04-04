import { Colors } from '../../utils/Colors';
import { ActivityIndicator } from 'react-native';

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
import { Box } from '../Container/style';

export const Button = ({ title, buttonFn, loading }) => {
	return (
		<ButtonContainer onPress={buttonFn}>
			{loading ? (
				<ActivityIndicator color="#fff" />
			) : (
				<ButtonText>{title}</ButtonText>
			)}
		</ButtonContainer>
	);
};

export const GoogleButton = (buttonFn, loading) => {
	return (
		<GoogleButtonContainer>
			{loading ? (
				<>
					<AntDesign
						name="google"
						size={24}
						color={Colors.secondary}
					/>
					<GoogleButtonText>
						Entrar com google
					</GoogleButtonText>
				</>
			) : (
				<ActivityIndicator color="#000" />
			)}
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
		<ConsultationButtonBox
			clickButton={clickButton}
			onPress={onPress}
		>
			<ConsultationButtonSwitchText clickButton={clickButton}>
				{textButton}
			</ConsultationButtonSwitchText>
		</ConsultationButtonBox>
	);
};
