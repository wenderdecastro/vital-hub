import { Button } from '../../components/Buttons';
import { Container } from '../../components/Container';
import { BackButton, CloseButton } from '../../components/FixedButtons';
import { Input } from '../../components/Input/style';
import { Logo } from '../../components/Logo/style';
import { AltText, RawText } from '../../components/Text/style';
import { Title } from '../../components/Title/style';
import { Colors } from '../../utils/Colors';
import { Spacing } from '../../utils/Components';

export const EmailConfirmationScreen = () => {
	return (
		<Container>
			<CloseButton />

			<Logo source={require('../../assets/VitalHub_Logo1.png')} />

			<Title>Verifique seu e-mail</Title>

			<RawText>
				Digite o código de 4 dígitos enviado para o e-mail
			</RawText>
			<AltText textColor={Colors.secondary_v1}>
				username@email.com
			</AltText>

			<Button title={'Verificar'} />
		</Container>
	);
};
