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
import { Box } from '../Container/style';
import { AltText, Label, MediumText } from '../Text/style';

export const Appointments = () => {
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
						<AltText fontSize={32}>Teste Teste</AltText>
						<Box>
							<MediumText>teste</MediumText>
							<Entypo
								name="dot-single"
								size={24}
								color={Colors.gray_v6}
							/>
						</Box>
					</AppointmentCardTextBox>
					<AppointmentCardContentBox>
						<ClockBox>
							<Ionicons
								name="time"
								size={15}
								color={Colors.primary}
							/>
							<Label textColor={Colors.primary}>14:00</Label>
						</ClockBox>
					</AppointmentCardContentBox>
				</Box>
			</AppointmentCardContent>
		</AppointmentCard>
	);
};
