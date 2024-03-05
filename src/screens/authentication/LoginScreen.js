import { Button, GoogleButton } from '../../components/Buttons';
import { Container } from '../../components/Container';
import { Input } from '../../components/Input/style';
import { Logo } from '../../components/Logo/style';
import { Title } from '../../components/Title/style';
import { Spacing } from '../../utils/Components';
import { AltLink } from '../../components/Link/style';
import { TextLink } from '../../components/Text';

export const LoginScreen = ({ navigation }) => {
	async function Login(email, senha) {
		navigation.navigate('Main');
	}
	return (
		<Container>
			<Logo source={require('../../assets/VitalHub_Logo1.png')} />

			<Title>Entrar ou criar conta</Title>

			<Spacing size={5} />

			<Input placeholder="Usuário ou E-mail" />

			<Input placeholder="Senha" />

			<Spacing size={10} />

			<AltLink
			// onPress={() => navigation.navigate('ForgotPassword')}
			>
				Esqueceu a senha?
			</AltLink>

			<Button title={'Entrar'} buttonFn={() => Login('a', 'a')} />

			<GoogleButton />

			<TextLink text="Não tem conta? " link="Crie uma conta agora!" />
		</Container>
	);
};
