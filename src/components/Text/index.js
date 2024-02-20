import { View } from 'react-native';
import { RawText, AltText } from './style';
import { Colors } from '../../utils/Colors';
import { Link } from '../Link/style';

export const TextLink = ({ text, link, handleFn = null }) => {
	return (
		<View style={{ flexDirection: 'row' }}>
			<AltText style={{ marginTop: 30 }}>{text}</AltText>
			<Link linkColor={Colors.secondary} onPress={handleFn}>
				{link}
			</Link>
		</View>
	);
};

export const DefaultText = ({ text }) => {
	return <RawText>{text}</RawText>;
};
