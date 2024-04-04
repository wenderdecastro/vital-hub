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
//importar os recursos da biblioteca
import * as Notifications from 'expo-notifications';

export const Modal = ({ isVisible, children, modalHeight }) => {
	return (
		<ModalBackground visible={isVisible}>
			<ModalContainer
				modalHeight={modalHeight}
				visible={isVisible}
			>
				{children}
			</ModalContainer>
		</ModalBackground>
	);
};

export const CancelModal = ({ isVisible, hideModalFn, ButtonFn }) => {
	//solicitar as permissoes de notificacao ao iniciar o app
	Notifications.requestPermissionsAsync();

	//definir como as notificacoes devem ser tratados quando recebidos
	Notifications.setNotificationHandler({
		handleNotification: async () => ({
			//mostra o alerta quando a notificao for recebida
			shouldShowAlert: true,

			//reproduz ou nao som ao receber a notificao
			shouldPlaySound: true,

			//configura o numero de notificacoes no icone do app
			shouldSetBadge: true,
		}),
	});
	//funcao para lidar com a chamada da notificacao
	const handleCallNotifications = async () => {
		//obtem o status das permissoes
		const { status } = await Notifications.getPermissionsAsync();

		//verifica se o usuario concedeu permissao para as notificacoes
		if (status !== 'granted') {
			alert('Voce nao deixou as notificacoes ativas');
			return;
		}

		//agendar uma notificao para ser exibida apos 5 segundos
		await Notifications.scheduleNotificationAsync({
			content: {
				title: 'teste notificacao',
				body: 'ta notificado',
			},
			trigger: {
				seconds: 2,
			},
		});
	};
	return (
		<Modal isVisible={isVisible}>
			<Title style={{ marginTop: '0' }}>
				Cancelar consulta
			</Title>
			<RawText>
				Ao cancelar essa consulta, abrirá uma possível
				disponibilidade no seu horário, deseja mesmo
				cancelar essa consulta?
			</RawText>

			<Button title={'Confirmar'} onPress={ButtonFn} />

			<Link onPress={hideModalFn}>Cancelar</Link>
		</Modal>
	);
};

export const CardModal = ({
	isVisible,
	hideModalFn,
	imgSource,
	patientAge,
	patientEmail,
	patientName,
	profile,
	navigateRecords,
	navigateMap,
}) => {
	return (
		<Modal isVisible={isVisible}>
			<ModalImage source={imgSource} />
			<Title>{patientName}</Title>
			<RawText fontSize={16}>
				{patientAge} anos {patientEmail}
			</RawText>
			{profile === 'Paciente' ? (
				<Button
					title="Ver local da consulta"
					buttonFn={navigateMap}
				/>
			) : (
				<Button
					title="Inserir prontuário"
					buttonFn={navigateRecords}
				/>
			)}

			<Link onPress={hideModalFn}>Cancelar</Link>
		</Modal>
	);
};

export const ScheduleAppointmentModal = ({
	isVisible,
	hideModalFn,
	buttonFn,
}) => {
	return (
		<AltModalBackground visible={isVisible}>
			<BottomModalContainer visible={isVisible}>
				<Title>Agendar consulta</Title>
				<Spacing size={35} />
				<Label fontSize={16}>
					Qual o nível da consulta?
				</Label>
				<SwitchContainer rowWidth={100}>
					<ConsultationButtonSwitch
						textButton={'Rotina'}
						// clickButton={listView === 'Pendente'}
						// onPress={() => setListView('Pendente')}
					/>
					<ConsultationButtonSwitch
						textButton={'Exame'}
						// clickButton={listView === 'Realizada'}
						// onPress={() => setListView('Realizada')}
					/>
					<ConsultationButtonSwitch
						textButton={'Urgência'}
						// clickButton={listView === 'Cancelada'}
						// onPress={() => setListView('Cancelada')}
					/>
				</SwitchContainer>
				<Spacing size={15} />
				<Label fontSize={16}>
					Informe a localização desejada
				</Label>
				<Input placeholder="Informe a localização" />
				<View
					style={{
						alignContent: 'flex-end',
						justifyContent: 'flex-end',
						height: '40%',
						width: '100%',
					}}
				>
					<Button
						title="Continuar"
						buttonFn={buttonFn}
					/>
					<Link onPress={hideModalFn}>
						Cancelar
					</Link>
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
				Consulte os dados selecionados para a sua
				consulta
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
