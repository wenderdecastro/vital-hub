import { Button } from "../../components/Buttons"
import { Container } from "../../components/Container"
import { BackButton, CloseButton } from "../../components/FixedButtons"
import { Input } from "../../components/Input/style"
import { Logo } from "../../components/Logo/style"
import { RawText } from "../../components/TextLink/style"
import { Title } from "../../components/Title/style"
import { Spacing } from "../../utils/Components"

export const ResetPasswordScreen = () => {
    return (
		<Container>
			<CloseButton/>
			
			<Logo source={require("../../assets/VitalHub_Logo1.png")}/>

			<Title>Redefinir senha</Title>

			<RawText>Insira e confirme a sua nova senha</RawText>

			<Spacing size={5} />

			<Input placeholder="Nova senha" />

			<Input placeholder="Confirmar nova senha" />

			<Button title={"Confirmar nova senha"} />
		</Container>
	);
}