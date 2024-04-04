import { Button, GoogleButton } from '../../components/Buttons';
import { Container } from '../../components/Container';
import { Input } from '../../components/Input/style';
import { Logo } from '../../components/Logo/style';
import { Title } from '../../components/Title/style';
import { Spacing } from '../../utils/Components';
import { AltLink } from '../../components/Link/style';
import { TextLink } from '../../components/Text';
import Toast from 'react-native-toast-message';
import { useState } from 'react';
import api from '../../services/apiservice';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LoginScreen = ({ navigation }) => {
	const [email, setEmail] = useState('string');
	const [senha, setSenha] = useState('string');

	const [loading, setLoading] = useState(false);

	async function Login() {
		if (email === '' || senha === '') {
			Toast.show({
				type: 'error',
				text1: 'Preencha todos os campos.',
				text2: 'Erro',
				text1Style: {
					fontSize: 16,
					fontWeight: 600,
					fontFamily: 'MontserratAlternates_600SemiBold',
				},
				text2Style: {
					fontSize: 16,
					fontFamily: 'MontserratAlternates_600SemiBold',
				},
			});
			return;
		}
		try {
			const response = await api.post('/Login', {
				email: email,
				senha: senha,
			});
			console.log(response);

			setLoading(true);
			console.log(response);
			console.log(response.status);

			await AsyncStorage.setItem(
				'token',
				JSON.stringify(response.data),
			);

			setTimeout(() => {
				setLoading(false);
				navigation.replace('Home');
			}, 2000);

			console.log(email);
			console.log(senha);
		} catch (error) {
			Toast.show({
				type: 'error',
				text1: 'Email ou senha inválidos.',
				text2: 'Erro',
				text1Style: {
					fontSize: 16,
					fontWeight: 600,
					fontFamily: 'MontserratAlternates_600SemiBold',
				},
				text2Style: {
					fontSize: 16,
					fontFamily: 'MontserratAlternates_600SemiBold',
				},
			});
			setLoading(false);
			console.error('Erro ao buscar dados de Login', error);
			return;
		}
	}

	return (
		<Container>
			<Logo
				source={require('../../assets/VitalHub_Logo1.png')}
			/>

			<Title>Entrar ou criar conta</Title>

			<Spacing size={5} />

			<Input
				value={email}
				onChangeText={(email) => setEmail(email)}
				placeholder="Usuário ou E-mail"
			/>

			<Input
				value={senha}
				onChangeText={(senha) => setSenha(senha)}
				placeholder="Senha"
			/>

			<Spacing size={10} />

			<AltLink
				onPress={() =>
					navigation.navigate('ForgotPassword')
				}
			>
				Esqueceu a senha?
			</AltLink>

			<Button
				title={'Entrar'}
				loading={loading}
				buttonFn={() => Login()}
			/>

			<GoogleButton loading={loading} />

			<TextLink
				handleFn={() => navigation.navigate('Register')}
				text="Não tem conta? "
				link="Crie uma conta agora!"
			/>
		</Container>
	);
};
