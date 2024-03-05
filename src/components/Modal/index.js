import { View } from 'react-native';
import { Spacing } from '../../utils/Components';
import { Button, ConsultationButtonSwitch } from '../Buttons';
import { SwitchContainer } from '../Buttons/style';
import { Input } from '../Input/style';
import { Link } from '../Link/style';
import { AlignedText, Label, RawText } from '../Text/style';
import { Title } from '../Title/style';
import {
	AltModalBackground,
	BottomModalContainer,
	ModalBackground,
	ModalContainer,
	ModalImage,
} from './style';

export const Modal = ({ isVisible, children, modalHeight }) => {
	return (
		<ModalBackground visible={isVisible}>
			<ModalContainer modalHeight={modalHeight} visible={isVisible}>
				{children}
			</ModalContainer>
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

export const ScheduleAppointmentModal = ({ isVisible, hideModalFn }) => {
	return (
		<AltModalBackground visible={isVisible}>
			<BottomModalContainer visible={isVisible}>
				<Title>Agendar consulta</Title>
				<Spacing size={35} />
				<Label fontSize={16}>Qual o nível da consulta?</Label>
				<SwitchContainer rowWidth={100}>
					<ConsultationButtonSwitch
						textButton={'Rotina'}
						// clickButton={listView === 'scheduled'}
						// onPress={() => setListView('scheduled')}
					/>
					<ConsultationButtonSwitch
						textButton={'Exame'}
						// clickButton={listView === 'terminated'}
						// onPress={() => setListView('terminated')}
					/>
					<ConsultationButtonSwitch
						textButton={'Urgência'}
						// clickButton={listView === 'cancelled'}
						// onPress={() => setListView('cancelled')}
					/>
				</SwitchContainer>
				<Spacing size={15} />
				<Label fontSize={16}>Informe a localização desejada</Label>
				<Input placeholder="Informe a localização" />
				<View
					style={{
						alignContent: 'flex-end',
						justifyContent: 'flex-end',
						height: '60%',
						width: '100%',
					}}
				>
					<Button title="Continuar" />
					<Link onPress={hideModalFn}>Cancelar</Link>
				</View>
			</BottomModalContainer>
		</AltModalBackground>
	);
};

export const ConfirmScheduleModal = ({
	isVisible,
	hideModalFn,
	appointmentDate,
	doctorName,
	doctorSpeciality,
	appointmentLocal,
	appointmentType,
}) => {
	return (
		<Modal modalHeight={80} isVisible={isVisible}>
			<Title>Agendar Consulta</Title>
			<RawText>
				Consulte os dados selecionados para a sua consulta
			</RawText>
			<Label>Data da consulta</Label>
			<AlignedText>{appointmentDate}</AlignedText>
			<Label>Médico(a) da consulta</Label>
			<AlignedText>{doctorName}</AlignedText>
			<AlignedText>{doctorSpeciality}</AlignedText>
			<Label>Local da consulta</Label>
			<AlignedText>{appointmentLocal}</AlignedText>
			<Label>Tipo da consulta</Label>
			<AlignedText>{appointmentType}</AlignedText>
			<Button title={'Confirmar'} />

			<Link onPress={hideModalFn}>Cancelar</Link>
		</Modal>
	);
};
