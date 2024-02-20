import styled from 'styled-components/native';
import { Colors } from '../../utils/Colors';

export const AppointmentListBox = styled.FlatList`
	flex: 1;
`;

export const AppointmentCard = styled.View`
	height: 100px;
	elevation: 5;
	width: 100%;
	align-items: center;
	justify-content: center;
`;

export const ProfileImage = styled.Image`
	height: 100%;
	aspect-ratio: 1/1;
	width: auto;
	object-fit: cover;
	border-radius: 5px;
`;

export const AppointmentCardContent = styled.View`
	width: 90%;
	align-items: inherit;
	justify-content: inherit;
	height: 90%;
	gap: 10px;
	flex-direction: row;
`;

export const ClockBox = styled.View`
	flex-direction: row;
	background-color: ${Colors.primary_v4};
	justify-content: center;
	align-items: center;
	width: 100px;
	padding: 7px;
	border-radius: 5px;
	align-self: flex-start;
	gap: 5px;
`;

export const AppointmentCardContentBox = styled.View`
	width: 100%;
	align-items: center;
	justify-content: space-between;
	height: 40%;
`;

export const AppointmentCardTextBox = styled.View`
	width: 100%;
	align-items: flex-start;
	justify-content: space-between;
	height: 60%;
`;
