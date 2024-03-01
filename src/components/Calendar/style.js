import styled from 'styled-components/native';

//import lib calendar-strip
import CalendarStrip from 'react-native-calendar-strip';

export const StyledCalendarStrip = styled(CalendarStrip)`
	height: 100px;
	width: 100%;
	margin: 20px 0px;
	padding: 0px;
`;

export const DayContainer = styled.View`
	background-color: ${(props) =>
		props.isSelected ? '#60BFC5' : 'transparent'};
	width: 32px;
	height: 32px;
	justify-content: center;
	align-items: center;
	border-radius: 20px;
`;

export const DayText = styled.Text`
	color: ${(props) =>
		props.isSelected
			? '#FBFBFB'
			: props.isDisabled
			? '#ACABB7'
			: '#5F5C6B'};
	font-size: 16px;
	font-family: 'MontserratAlternates_600SemiBold';
`;
