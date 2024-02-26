import { View } from 'react-native';
import { Label } from '../Text/style';
import { Input, InputBox, LargeInput } from './style';

export const LabelledInput = ({ placeholder, labeltext, isReadOnly }) => {
	return (
		<InputBox>
			<Label>{labeltext}</Label>
			<Input placeholder={placeholder} isReadOnly={isReadOnly} />
		</InputBox>
	);
};

export const ShortLabelledInput = ({ placeholder, labeltext, isReadOnly }) => {
	return (
		<InputBox style={{ width: '47.5%' }}>
			<Label>{labeltext}</Label>
			<Input placeholder={placeholder} isReadOnly={isReadOnly} />
		</InputBox>
	);
};

export const LargeLabelledInput = ({
	inputHeight,
	placeholder,
	labeltext,
	isReadOnly,
}) => {
	return (
		<InputBox>
			<Label>{labeltext}</Label>
			<LargeInput
				inputHeight={inputHeight}
				placeholder={placeholder}
				isReadOnly={isReadOnly}
			/>
		</InputBox>
	);
};
