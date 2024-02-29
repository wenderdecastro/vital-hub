import { MonthlyCalendar } from '../../components/Calendar/MontlyCalendar';
import { Container } from '../../components/Container';

export const SelectDateScreen = () => {
	return (
		<Container>
			<Title>Selecionar Data</Title>
			<MonthlyCalendar />
		</Container>
	);
};
