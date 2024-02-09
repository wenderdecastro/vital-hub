import { View } from 'react-native';
import { RawText, BoldText } from './style';
import { Colors } from '../../utils/Colors';
import { Link } from '../Link/style';

export const TextLink = ({ text, link, handleFn = null }) => {
	return (
		<View style={{ flexDirection: 'row' }}>
			<BoldText style={{ marginTop: 30 }}>{text}</BoldText>
			<Link linkColor={Colors.secondary} onPress={handleFn}>
				{link}
			</Link>
		</View>
	);
};

export const DefaultText = ({ text }) => {
	return <RawText>{text}</RawText>;
};
