import { Button, GoogleButton } from "../../components/Buttons";
import { Container } from "../../components/Container";
import { Input } from "../../components/Input/style";
import { Logo } from "../../components/Logo/style";
import { Title } from "../../components/Title/style";
import { Spacing } from "../../utils/Components";
import { ForgotPasswordLink } from "../../components/TextLink/style";
import {TextLink } from "../../components/TextLink";

export const Login = () => {
	return (
		<Container>

			<Logo source={require("../../assets/VitalHub_Logo1.png")} />

			<Title>Entrar ou criar conta</Title>

			<Spacing size={5} />

			<Input placeholder="Usuário ou E-mail" />

			<Input placeholder="Senha" />

			<Spacing size={10} />

			<ForgotPasswordLink>Esqueceu a senha?</ForgotPasswordLink>

			<Spacing size={30} />

			<Button title={"Entrar"} />

			<Spacing size={15} />

			<GoogleButton />

			<Spacing size={30} />

			<TextLink text="Não tem conta? " link="Crie uma conta agora!"  />

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
