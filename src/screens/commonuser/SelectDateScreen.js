import { useState } from 'react';
import { MonthlyCalendar } from '../../components/Calendar/MontlyCalendar';
import { Container } from '../../components/Container';
import { Title } from '../../components/Title/style';
import { Spacing } from '../../utils/Components';
import { Label, RawText } from '../../components/Text/style';
import { View } from 'react-native';

import { SelectInput } from '../../components/Select';
import { Button } from '../../components/Buttons';
import { Link } from '../../components/Link/style';

export const SelectDateScreen = () => {
	const [selectedDate, setSelectedDate] = useState();
	const [selectedTime, setSelectedTime] = useState();

	const [avaliableTimesData, setAvaliableTimesData] = useState([
		'12:30',
		'14:00',
		'15:30',
		'16:00',
		'17:00',
	]);

	return (
		<Container>
			<Spacing size={60} />
			<Title>Selecionar Data</Title>
			<Spacing size={30} />
			<View style={{ height: 360 }}>
				<MonthlyCalendar
					selectedDate={selectedDate}
					handleSelectedDateFn={setSelectedDate}
				/>
			</View>
			<Spacing size={40} />
			<Label fontSize={14}>Selecione um horário disponível</Label>
			<Spacing size={10} />
			<SelectInput
				defaultText="Selecionar horário"
				handleSelectedFn={setSelectedTime}
				data={avaliableTimesData}
			/>
			<Spacing size={10} />
			<Button title={'Continuar'} />

			<Link>Cancelar</Link>
		</Container>
	);
};
