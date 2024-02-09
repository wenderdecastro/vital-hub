import { StyleSheet, View } from 'react-native';
import { BoldText, RawText } from '../Text/style';
import { ProfileBox } from '../Container/style';

export const FloatingSection = ({ username, useremail }) => {
	return (
		<ProfileBox>
			<BoldText>{username}</BoldText>
			<RawText>{useremail}</RawText>
		</ProfileBox>
	);
};
