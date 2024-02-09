import { View } from 'react-native';
import { Label } from '../Text/style';
import { AltInput } from './style';

export const LabelledInput = ({ placeholder, labeltext }) => {
	return (
		<View style={{ width: '100%' }}>
			<Label>{labeltext}</Label>
			<AltInput placeholder={placeholder} />
		</View>
	);
};
