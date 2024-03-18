import { StatusBar, View } from 'react-native';
import { Header } from '../../components/Header';
import { WeeklyCalendar } from '../../components/Calendar/WeeklyCalendar';
import { Container } from '../../components/Container';
import { ContainerBox } from '../../components/Container/style';
import { FilterButtonSwitch } from '../../components/Buttons';
import { SwitchContainer } from '../../components/Buttons/style';
import { useState } from 'react';
import { AppointmentCard, Appointments } from '../../components/Card';
import { CardList } from '../../components/Card/style';
import {
	CancelModal,
	ConfirmScheduleModal,
	CardModal,
	ScheduleAppointment,
	ScheduleAppointmentModal,
} from '../../components/Modal';
import { NewScheduleButton } from '../../components/FixedButtons';

//importar os recursos da biblioteca
import * as Notifications from 'expo-notifications';

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

export const Home = ({ navigation }) => {
	const [AppointmentList, setAppointmentList] = useState([
		{
			consultationId: 1,
			patientName: 'Tasmania',
			patientAge: '69',
			appointmentPriority: 'Rotina',
			appointmentTime: '14:00',
			appointmentStatus: 'cancelled',
		},
		{
			consultationId: 2,
			patientName: 'Pato donald',
			patientAge: '28',
			appointmentPriority: 'Urgência',
			appointmentTime: '15:00',
			appointmentStatus: 'scheduled',
		},
		{
			consultationId: 3,
			patientName: 'Endauldi',
			patientAge: '24',
			appointmentPriority: 'Rotina',
			appointmentTime: '16:00',
			appointmentStatus: 'terminated',
		},
		{
			consultationId: 4,
			patientName: 'Aggrumgit',
			patientAge: '22',
			appointmentPriority: 'Urgência',
			appointmentTime: '15:00',
			appointmentStatus: 'scheduled',
		},
	]);
	const [profile, setProfile] = useState('Pacienteasd');
	const [listView, setListView] = useState('scheduled');

	const [cancelModalVisible, setCancelModalVisible] = useState(false);
	const [cardModalVisible, setCardModalVisible] = useState(false);
	const [NewRecordModalVisible, setNewRecordModalVisible] =
		useState(false);
	const [confirmModalVisible, setConfirmModalVisible] = useState(false);
	async function handleClose(screen) {
		await setCardModalVisible(false);
		navigation.replace(screen);
	}

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
		<>
			<CancelModal
				isVisible={cancelModalVisible}
				ButtonFn={handleCallNotifications}
				hideModalFn={() => {
					setCancelModalVisible(false);
				}}
			/>
			<CardModal
				profile={profile}
				navigateMap={() =>
					handleClose('AppointmentMap')
				}
				navigateRecords={() =>
					handleClose('Prescription')
				}
				patientAge={22}
				patientName={'Tasmania Souza'}
				patientEmail={'ribossomos@gmail'}
				imgSource={{
					uri: 'https://http2.mlstatic.com/D_NQ_NP_912498-MLB52128503176_102022-O.png',
				}}
				isVisible={cardModalVisible}
				hideModalFn={() => {
					setCardModalVisible(false);
				}}
			/>

			<ScheduleAppointmentModal
				isVisible={NewRecordModalVisible}
				hideModalFn={() =>
					setNewRecordModalVisible(false)
				}
			/>

			<ConfirmScheduleModal
				isVisible={confirmModalVisible}
				hideModalFn={() =>
					setConfirmModalVisible(false)
				}
			/>

			<ContainerBox>
				<StatusBar />

				{/* Header */}
				<Header
					profileClick={() =>
						navigation.navigate('Profile')
					}
				/>

				{/* Calendar */}

				<WeeklyCalendar />

				{/* Filtros (button) */}
				<SwitchContainer>
					<FilterButtonSwitch
						textButton={'Agendadas'}
						clickButton={
							listView === 'scheduled'
						}
						onPress={() =>
							setListView('scheduled')
						}
					/>
					<FilterButtonSwitch
						textButton={'Realizadas'}
						clickButton={
							listView ===
							'terminated'
						}
						onPress={() =>
							setListView(
								'terminated',
							)
						}
					/>
					<FilterButtonSwitch
						textButton={'Canceladas'}
						clickButton={
							listView === 'cancelled'
						}
						onPress={() =>
							setListView('cancelled')
						}
					/>
				</SwitchContainer>

				<Container>
					<NewScheduleButton
						NewScheduleFn={() => {
							setNewRecordModalVisible(
								true,
							);
						}}
					/>
					<CardList
						data={AppointmentList}
						key={(item) => item.id}
						renderItem={({ item }) =>
							listView ==
								item.appointmentStatus && (
								<AppointmentCard
									profile={
										profile
									}
									patientName={
										item.patientName
									}
									patientAge={
										item.patientAge
									}
									appointmentTime={
										item.appointmentTime
									}
									appointmentPriority={
										item.appointmentPriority
									}
									appointmentStatus={
										item.appointmentStatus
									}
									cancelFn={() => {
										setCancelModalVisible(
											true,
										);
									}}
									viewMedicalRecordsFn={
										profile ===
										'Paciente'
											? () => {
													navigation.navigate(
														'MedicalRecord',
													);
											  }
											: () => {
													setCardModalVisible(
														true,
													);
											  }
									}
									navigation={
										navigation
									}
									cardClickFn={() => {
										setCardModalVisible(
											true,
										);
									}}
								/>
							)
						}
					/>
				</Container>
				{/* Cards */}
			</ContainerBox>
		</>
	);
};
