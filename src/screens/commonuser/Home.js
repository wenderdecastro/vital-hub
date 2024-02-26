import { StatusBar } from 'react-native';
import { Header } from '../../components/Header';
import { WeeklyCalendar } from '../../components/Calendar/WeeklyCalendar';
import { Container } from '../../components/Container';
import { ContainerBox } from '../../components/Container/style';
import { AppointmentFilter, ThreeButtonSwitch } from '../../components/Buttons';
import { FilterContainer } from '../../components/Buttons/style';
import { useState } from 'react';
import { AppointmentCard, Appointments } from '../../components/Card';
import { CardList } from '../../components/Card/style';
import { CancelModal, MedicalRecordModal } from '../../components/Modal';

export const Home = () => {
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
		{
			consultationId: 5,
			patientName: 'BUGIGANGA',
			patientAge: '13',
			appointmentPriority: 'Urgência',
			appointmentTime: '15:00',
			appointmentStatus: 'cancelled',
		},
	]);

	const [listView, setListView] = useState('scheduled');

	const [cancelModalVisible, setCancelModalVisible] = useState(false);
	const [medicalRecordModalVisible, setMedicalRecordModalVisible] =
		useState(false);
	return (
		<>
			<CancelModal
				isVisible={cancelModalVisible}
				hideModalFn={() => {
					setCancelModalVisible(false);
				}}
			/>
			<MedicalRecordModal
				patientAge={22}
				patientName={'Tasmania Souza'}
				patientEmail={'ribossomos@gmail'}
				imgSource={{
					uri: 'https://http2.mlstatic.com/D_NQ_NP_912498-MLB52128503176_102022-O.png',
				}}
				isVisible={medicalRecordModalVisible}
				hideModalFn={() => {
					setMedicalRecordModalVisible(false);
				}}
			/>
			<ContainerBox>
				<StatusBar />

				{/* Header */}
				<Header />

				{/* Calendar */}
				<WeeklyCalendar />

				{/* Filtros (button) */}
				<FilterContainer>
					<AppointmentFilter
						textButton={'Agendadas'}
						clickButton={listView === 'scheduled'}
						onPress={() => setListView('scheduled')}
					/>
					<AppointmentFilter
						textButton={'Realizadas'}
						clickButton={listView === 'terminated'}
						onPress={() => setListView('terminated')}
					/>
					<AppointmentFilter
						textButton={'Canceladas'}
						clickButton={listView === 'cancelled'}
						onPress={() => setListView('cancelled')}
					/>
				</FilterContainer>

				<CardList
					data={AppointmentList}
					key={(item) => item.id}
					renderItem={({ item }) =>
						listView == item.appointmentStatus && (
							<AppointmentCard
								patientName={item.patientName}
								patientAge={item.patientAge}
								appointmentTime={item.appointmentTime}
								appointmentPriority={item.appointmentPriority}
								appointmentStatus={item.appointmentStatus}
								cancelFn={() => {
									setCancelModalVisible(true);
								}}
								cardClickFn={() => {
									setMedicalRecordModalVisible(true);
								}}
							/>
						)
					}
				/>

				{/* Cards */}
			</ContainerBox>
		</>
	);
};
