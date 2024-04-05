import { StatusBar, View } from 'react-native';
import { Header } from '../../components/Header';
import { WeeklyCalendar } from '../../components/Calendar/WeeklyCalendar';
import { Container } from '../../components/Container';
import { ContainerBox } from '../../components/Container/style';
import { FilterButtonSwitch } from '../../components/Buttons';
import { SwitchContainer } from '../../components/Buttons/style';

import { AppointmentCard, Appointments } from '../../components/Card';

import { CardList } from '../../components/Card/style';
import {
	CancelModal,
	ConfirmScheduleModal,
	CardModal,
	ScheduleAppointmentModal,
} from '../../components/Modal';
import { NewScheduleButton } from '../../components/FixedButtons';

//importar os recursos da biblioteca
import * as Notifications from 'expo-notifications';
import { userDecodeToken } from '../../utils/Auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/apiservice';
import { useEffect, useState } from 'react';

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
	//** MODAIS */

	const [cancelModalVisible, setCancelModalVisible] = useState(false);
	const [cardModalVisible, setCardModalVisible] = useState(false);
	const [NewRecordModalVisible, setNewRecordModalVisible] =
		useState(false);
	const [confirmModalVisible, setConfirmModalVisible] = useState(false);

	async function handleClose(screen) {
		await setCardModalVisible(false);
		navigation.replace(screen);
	}

	//** NOTIFICATIONS

	//funcao para lidar com a chamada da notificacao
	const handleCallNotifications = async () => {
		//obtem o status das permissoes
		const { status } = await Notifications.getPermissionsAsync();

		//verifica se o usuario concedeu permissao para as notificacoes
		if (status !== 'granted') {
			alert('Notificações não permitidas.');
			return;
		}
	};

	//** AUTH

	const [userRole, setUserRole] = useState();
	const [profile, setProfile] = useState();
	const [userid, SetUserId] = useState();

	async function profileLoad() {
		setProfile(await userDecodeToken());

		// const object = token;
		// console.log(token);
		// console.log(token.jti);
		// setProfile(object);
		// SetUserId(token.jti);
		console.log('****************** states');
		console.log(profile);
		console.log(profile.jti);
	}

	//**LISTAR CONSULTA

	const [listView, setListView] = useState('Pendente');

	const [dataConsulta, setDataConsulta] = useState();

	const [listaConsultas, setListaConsultas] = useState(null);

	async function ListarConsulta() {
		try {
			const token = JSON.parse(
				await AsyncStorage.getItem('token'),
			).token;
			// console.log(token);
			// console.log(profile);
			if (token) {
				await api
					.get(
						`/Pacientes/BuscarPorData?data=${dataConsulta}&id=${userid}`,
						{
							headers: {
								Authorization: `Bearer ${token}`,
							},
						},
					)
					.then((response) => {
						console.log(response.data);
						setListaConsultas(
							response.data,
						);
					})
					.catch((error) => {
						console.log(error);
					});
			} else {
				console.log('Erro, autorização não concedida');
			}
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		profileLoad();
	}, []);

	useEffect(() => {
		if (dataConsulta != '') {
			ListarConsulta();
		}
		console.log(dataConsulta);
	}, [dataConsulta]);

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

				<WeeklyCalendar
					setDataConsulta={setDataConsulta}
				/>

				{/* Filtros (button) */}
				<SwitchContainer>
					<FilterButtonSwitch
						textButton={'Agendadas'}
						clickButton={
							listView === 'Pendente'
						}
						onPress={() =>
							setListView('Pendente')
						}
					/>
					<FilterButtonSwitch
						textButton={'Realizadas'}
						clickButton={
							listView === 'Realizada'
						}
						onPress={() =>
							setListView('Realizada')
						}
					/>
					<FilterButtonSwitch
						textButton={'Canceladas'}
						clickButton={
							listView === 'Cancelada'
						}
						onPress={() =>
							setListView('Cancelada')
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
						data={listaConsultas}
						key={(data) => data.id}
						renderItem={({ data }) =>
							listView ===
								'Pendente' &&
							listaConsultas &&
							data.situacao
								.situacao ? (
								<AppointmentCard
									profile={
										profile
									}
									patientName={
										profile.role ===
										'Paciente'
											? data
													.paciente
													.idNavigation
													.nome
											: data
													.medicoClinica
													.medico
													.idNavigation
													.nome
									}
									patientAge={
										profile.role ===
										'Paciente'
											? moment(
													data
														.paciente
														.dataNascimento,
											  )
													.fromNow(
														true,
													)
													.charAt(
														0,
													) +
											  ' Anos'
											: data
													.medicoClinica
													.medico
													.crm
									}
									appointmentTime={
										data.appointmentTime
									}
									appointmentPriority={
										data
											.prioridade
											.prioridade ===
										1
											? 'Urgência'
											: prioridade ===
											  2
											? 'Consulta'
											: 'Rotina'
									}
									appointmentStatus={
										data.appointmentStatus
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
							) : (
								<></>
							)
						}
					/>
				</Container>
				{/* Cards */}
			</ContainerBox>
		</>
	);
};
