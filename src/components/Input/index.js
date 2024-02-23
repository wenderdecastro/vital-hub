import { View } from 'react-native';
import { Label } from '../Text/style';
import { AltInput, Input } from './style';

export const LabelledInput = ({ placeholder, labeltext, isReadOnly }) => {
	return (
		<View style={{ width: '100%', marginTop: 20 }}>
			<Label>{labeltext}</Label>
			<Input placeholder={placeholder} isReadOnly={isReadOnly} />
		</View>
	);
};

export const ShortLabelledInput = ({ placeholder, labeltext, isReadOnly }) => {
	return (
		<View style={{ width: '47.5%', marginTop: 20 }}>
			<Label>{labeltext}</Label>
			<Input placeholder={placeholder} isReadOnly={isReadOnly} />
		</View>
	);
};
