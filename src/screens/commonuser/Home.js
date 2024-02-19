import { StatusBar } from 'react-native';
import { Header } from '../../components/Header';
import { WeeklyCalendar } from '../../components/Calendar/WeeklyCalendar';
import { Container } from '../../components/Container';
import { ContainerBox } from '../../components/Container/style';
import { AppointmentFilter, ThreeButtonSwitch } from '../../components/Buttons';
import { FilterContainer } from '../../components/Buttons/style';
import { useState } from 'react';

const Consultas = [
	{ id: 1, nome: 'Carlos', situacao: 'pendente' },
	{ id: 2, nome: 'Carlos', situacao: 'realizado' },
	{ id: 3, nome: 'Carlos', situacao: 'pendente' },
	{ id: 4, nome: 'Carlos', situacao: 'realizado' },
	{ id: 5, nome: 'Carlos', situacao: 'cancelado' },
	{ id: 6, nome: 'Carlos', situacao: 'cancelado' },
];
export const Home = () => {
	const [statusLista, setStatusLista] = useState('pendente');
	return (
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
					clickButton={statusLista === 'pendente'}
					onPress={() => setStatusLista('pendente')}
				/>
				<AppointmentFilter
					textButton={'Realizadas'}
					clickButton={statusLista === 'realizado'}
					onPress={() => setStatusLista('realizado')}
				/>
				<AppointmentFilter
					textButton={'Canceladas'}
					clickButton={statusLista === 'cancelado'}
					onPress={() => setStatusLista('cancelado')}
				/>
			</FilterContainer>

			{/* Cards */}
		</ContainerBox>
	);
};
