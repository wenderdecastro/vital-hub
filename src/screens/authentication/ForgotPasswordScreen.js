import { Button } from '../../components/Buttons';
import { Container } from '../../components/Container';
import { BackButton } from '../../components/FixedButtons';
import { Input } from '../../components/Input/style';
import { Logo } from '../../components/Logo/style';
import { RawText } from '../../components/Text/style';
import { Title } from '../../components/Title/style';
import { Spacing } from '../../utils/Components';

export const ForgotPasswordScreen = () => {
	return (
		<Container>
			<BackButton />

			<Logo source={require('../../assets/VitalHub_Logo1.png')} />

			<Title>Recuperar Senha</Title>

			<RawText>
				Digite abaixo seu email cadastrado que enviaremos um link para
				recuperação de senha
			</RawText>

			<Spacing size={5} />

			<Input placeholder="Usuário ou E-mail" />

			<Button title={'Continuar'} />
		</Container>
	);
};
