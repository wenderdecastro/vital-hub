import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../utils/Colors';
import {
	AppointmentCard,
	AppointmentCardContent,
	AppointmentCardContentBox,
	AppointmentCardTextBox,
	ClockBox,
	ProfileImage,
} from './style';
import { Entypo } from '@expo/vector-icons';
import { Box, RowBox } from '../Container/style';
import { AltText, Label, MediumText, ThinText } from '../Text/style';
import { AltLink } from '../Link/style';

export const Appointment = ({
	patientAge,
	appointmentPriority,
	patientName,
	appointmentTime,
	appointmentStatus,
	cancelFn,
	viewMedicalRecordsFn,
}) => {
	return (
		<AppointmentCard>
			<AppointmentCardContent>
				<ProfileImage
					source={{
						uri: 'https://res.cloudinary.com/buzzfeed-brasil/image/upload/q_auto,f_auto/image-uploads/quiz-result-image/unknown/0054d5b79fbebc88f6b032788be67a87.jpg',
					}}
				/>
				<Box>
					<AppointmentCardTextBox>
						<AltText fontSize={24}>{patientName}</AltText>
						<RowBox>
							<ThinText style={{ height: '100%' }}>
								{patientAge} anos
							</ThinText>
							<Entypo
								name="dot-single"
								size={24}
								color={Colors.gray_v6}
							/>
							<Label style={{ height: '100%' }}>
								{appointmentPriority}
							</Label>
						</RowBox>
					</AppointmentCardTextBox>
					<AppointmentCardContentBox>
						<ClockBox
							boxColor={
								appointmentStatus == 'scheduled'
									? Colors.primary_v4
									: Colors.white_v1
							}
						>
							<Ionicons
								name="time"
								size={15}
								color={
									appointmentStatus == 'scheduled'
										? Colors.primary
										: Colors.gray_v1
								}
							/>
							<Label
								style={{ height: '100%' }}
								textColor={
									appointmentStatus == 'scheduled'
										? Colors.primary
										: Colors.gray_v1
								}
							>
								{appointmentTime}
							</Label>
						</ClockBox>
						{appointmentStatus == 'cancelled' ? (
							<></>
						) : appointmentStatus == 'scheduled' ? (
							<AltLink
								textDecoration={'none'}
								linkColor={Colors.red}
								style={{ alignSelf: 'center' }}
								onPress={cancelFn}
							>
								Cancelar
							</AltLink>
						) : (
							<AltLink
								textDecoration={'none'}
								linkColor={Colors.secondary_v1}
								style={{ alignSelf: 'center' }}
								onPress={viewMedicalRecordsFn}
							>
								Ver Prontuário
							</AltLink>
						)}
					</AppointmentCardContentBox>
				</Box>
			</AppointmentCardContent>
		</AppointmentCard>
	);
};
