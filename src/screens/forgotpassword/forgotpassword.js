import { Container } from "../../components/Container"
import { Logo } from "../../components/Logo/style"
import { Title } from "../../components/Title/style"
import { Spacing } from "../../utils/Components"

export const forgotPassword = () => {
    return (
		<Container>
			<Logo />

			<Title>Recuperar Senha</Title>

			<Spacing size={15} />
		</Container>
	);
}