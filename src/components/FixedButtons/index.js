import { Colors } from '../../utils/Colors';
import { Circle, RoundedSquare } from './style';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export const BackButton = ({ BackFn }) => {
	return (
		<Circle onPress={BackFn}>
			<Ionicons
				name="arrow-back-sharp"
				size={24}
				color={Colors.primary_v1}
			/>
		</Circle>
	);
};

export const CloseButton = ({ CloseFn }) => {
	return (
		<Circle onPress={CloseFn}>
			<Ionicons name="close-sharp" size={24} color={Colors.primary_v1} />
		</Circle>
	);
};

export const NewScheduleButton = ({ NewScheduleFn = null }) => {
	return (
		<RoundedSquare onPress={NewScheduleFn}>
			<MaterialCommunityIcons
				name="stethoscope"
				size={24}
				color={Colors.white}
			/>
		</RoundedSquare>
	);
};
