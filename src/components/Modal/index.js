import { Spacing } from '../../utils/Components';
import {
	Button,
	ConsultationButtonSwitch,
	FilterButtonSwitch,
} from '../Buttons';
import { RowBox } from '../Container/style';
import { Link } from '../Link/style';
import { RawText } from '../Text/style';
import { Title } from '../Title/style';
import {
	BottomModalContainer,
	ModalBackground,
	ModalContainer,
	ModalImage,
} from './style';

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
	patientName,
}) => {
	return (
		<Modal isVisible={isVisible}>
			<ModalImage source={imgSource} />
			<Title>{patientName}</Title>
			<RawText fontSize={16}>
				{patientAge} anos {patientEmail}
			</RawText>

			<Button title={'Inserir prontuário'} />

			<Link onPress={hideModalFn}>Cancelar</Link>
		</Modal>
	);
};

export const ScheduleAppointment = () => {
	return (
		<ModalBackground visible={isVisible}>
			<BottomModalContainer visible={isVisible}>
				<Title>Agendar consulta</Title>
				<Label fontSize={16}>Qual o nível da consulta?</Label>
				<SwitchContainer>
					<ConsultationButtonSwitch
						textButton={'Rotina'}
						clickButton={listView === 'scheduled'}
						onPress={() => setListView('scheduled')}
					/>
					<ConsultationButtonSwitch
						textButton={'Exame'}
						clickButton={listView === 'terminated'}
						onPress={() => setListView('terminated')}
					/>
					<ConsultationButtonSwitch
						textButton={'Urgência'}
						clickButton={listView === 'cancelled'}
						onPress={() => setListView('cancelled')}
					/>
				</SwitchContainer>
			</BottomModalContainer>
		</ModalBackground>
	);
};
