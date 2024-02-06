import { Container } from "../../components/Container/style";
import { Input } from "../../components/Input/style";
import { Logo } from "../../components/Logo/style";
import { Title } from "../../components/Title/style";

export const Login = () => {
	return (
		<Container>
			<Logo source={require("../../assets/VitalHub_Logo1.png")} />

			<Title>Entrar ou criar conta</Title>

			<Input placeholder="Usuário ou E-mail" />
			<Input placeholder="Senha" />
			<Link>Esqueceu a senha?</Link>
			{/* 


            <SignInButton>
                <ButtonTitle></ButtonTitle>
            </SignInButton>

            <GoogleButton>
                <ButtonTitle></ButtonTitle>
            </GoogleButton>
            
            <SignUp></SignUp> */}
		</Container>
	);
};
