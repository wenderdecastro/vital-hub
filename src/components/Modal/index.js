import { Spacing } from '../../utils/Components';
import { Button } from '../Buttons';
import { RowBox } from '../Container/style';
import { Link } from '../Link/style';
import { RawText } from '../Text/style';
import { Title } from '../Title/style';
import { ModalBackground, ModalContainer, ModalImage } from './style';

export const Modal = ({ isVisible, children }) => {
	return (
		<ModalBackground visible={isVisible}>
			<ModalContainer visible={isVisible}>{children}</ModalContainer>
		</ModalBackground>
	);
};

export const CancelModal = ({ isVisible, hideModalFn }) => {
	return (
		<Modal isVisible={isVisible}>
			<Title style={{ marginTop: '0' }}>Cancelar consulta</Title>
			<RawText>
				Ao cancelar essa consulta, abrirá uma possível disponibilidade
				no seu horário, deseja mesmo cancelar essa consulta?
			</RawText>

			<Button title={'Confirmar'} />

			<Link onPress={hideModalFn}>Cancelar</Link>
		</Modal>
	);
};

export const MedicalRecordModal = ({
	isVisible,
	hideModalFn,
	imgSource,
	patientAge,
	patientEmail,
}) => {
	return (
		<Modal isVisible={isVisible}>
			<ModalImage source={imgSource} />
			<Title>Tasmania da Silva</Title>
			<RawText fontSize={18}>
				18 anos juliofrigideira@xerecamail.com
			</RawText>

			<Button title={'Inserir prontuário'} />

			<Link onPress={hideModalFn}>Cancelar</Link>
		</Modal>
	);
};
