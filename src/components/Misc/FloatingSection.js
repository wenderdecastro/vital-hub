import { StyleSheet, View } from 'react-native';
import { AltText, RawText, ThinText } from '../Text/style';
import { ProfileBox } from '../Container/style';
import { Spacing } from '../../utils/Components';

export const FloatingSection = ({ username, useremail }) => {
	return (
		<ProfileBox>
			<AltText>{username}</AltText>
			<Spacing size={12} />
			<ThinText>{useremail}</ThinText>
		</ProfileBox>
	);
};
