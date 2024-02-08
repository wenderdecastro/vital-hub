import { View } from "react-native";
import { RawText , Link, BoldText } from "./style";
import { Colors } from "../../utils/Colors";

export const TextLink = ({text, link, handleFn = null}) => {
    return (
		<View style={{flexDirection: "row", marginTop: 30}}>
			<BoldText>{text}</BoldText>
			<Link linkColor={Colors.secondary} onPress={handleFn}>{link}</Link>
		</View>
	);
    
}

export const DefaultText = ({text}) => {
    return (
			<RawText>{text}</RawText>
	);
    
}