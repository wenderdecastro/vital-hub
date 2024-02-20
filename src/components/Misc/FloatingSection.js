import { StyleSheet, View } from 'react-native';
import { AltText, RawText } from '../Text/style';
import { ProfileBox } from '../Container/style';

export const FloatingSection = ({ username, useremail }) => {
	return (
		<ProfileBox>
			<AltText>{username}</AltText>
			<RawText>{useremail}</RawText>
		</ProfileBox>
	);
};
