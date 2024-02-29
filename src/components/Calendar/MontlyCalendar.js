import { Calendar, LocaleConfig } from 'react-native-calendars';
import { DayContainer, DayText } from './Style';
import { StyleSheet, TouchableOpacity } from 'react-native';

LocaleConfig.locales['br'] = {
	monthNames: [
		'Janeiro',
		'Fevereiro',
		'Março',
		'Abril',
		'Maio',
		'Junho',
		'Julho',
		'Agosto',
		'Setembro',
		'Outubro',
		'Novembro',
		'Dezembro',
	],
	dayNames: [
		'Domingo',
		'Segunda',
		'Terça',
		'Quarta',
		'Quinta',
		'Sexta',
		'Sábado', // Corrigido para "Sábado"
	],
	dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sáb.'], // Corrigido para "Sáb."
	today: '',
};

LocaleConfig.defaultLocale = 'br';

export const MonthlyCalendar = ({
	selectedDate = '',
	handleSelectedDateFn = null,
}) => {
	const currentDate = new Date().toUTCString();
	return (
		<Calendar
			minDate={currentDate}
			monthFormat="MMMM yyyy"
			enableSwipeMonths={true}
			hideArrows={true}
			style={styles.calendar}
			theme={{
				dotColor: '#5F5C6B',
				calendarBackground: '#FBFBFB',
			}}
			dayComponent={({ date, state }) => (
				<TouchableOpacity
					onPress={() => {
						if (state == 'disabled') return;

						handleSelectedDateFn(date.dateString);
					}}
				>
					<DayContainer isSelected={date.dateString == selectedDate}>
						<DayText
							isSelected={date.dateString == selectedDate}
							isDisabled={state == 'disabled'}
						>
							{date.day}
						</DayText>
					</DayContainer>
				</TouchableOpacity>
			)}
		/>
	);
};

const styles = StyleSheet.create({
	calendar: {
		width: 400,
	},
});
