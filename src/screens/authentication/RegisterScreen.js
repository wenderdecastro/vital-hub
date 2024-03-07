import { Button } from '../../components/Buttons';
import { Container } from '../../components/Container';
import { BackButton } from '../../components/FixedButtons';
import { Input } from '../../components/Input/style';
import { Logo } from '../../components/Logo/style';
import { RawText } from '../../components/Text/style';
import { Title } from '../../components/Title/style';
import { Spacing } from '../../utils/Components';
import { Link } from '../../components/Link/style';

export const RegisterScreen = ({ navigation }) => {
	return (
		<Container>
			<BackButton BackFn={() => navigation.goBack()} />

			<Logo source={require('../../assets/VitalHub_Logo1.png')} />

			<Title>Criar conta</Title>

			<RawText>
				Insira seu endereço de e-mail e senha para realizar seu
				cadastro.
			</RawText>

			<Spacing size={5} />

			<Input placeholder="Usuário ou E-mail" />

			<Input placeholder="Senha" />

			<Input placeholder="Confirmar senha" />

			<Button title={'Cadastrar'} />

			<Link onPress={() => navigation.goBack()}>Cancelar</Link>
		</Container>
	);
};
