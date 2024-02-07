import styled from "styled-components/native";
import { Colors } from "../../utils/Colors";

export const DefaultButtonContainer = styled.TouchableOpacity`
    width: 100%;
    height: 7%;
    align-items: center;
    justify-content: center;
    background-color: ${Colors.secondary};
    border-radius: 8px;
    
`;

export const GoogleButtonContainer = styled.TouchableOpacity`
	width: 100%;
	height: 7%;
	align-items: center;
    justify-content: center;
	background-color: ${Colors.white};
	border-radius: 8px;
    border: 1px ${Colors.secondary};
    flex-direction: row;
    gap: 30px;
`;


export const DefaultButtonText = styled.Text`
    font-family: 'MontserratAlternates_700Bold';
    font-size: 16px;
    text-align: center;
    color: ${Colors.white};
    text-transform: uppercase;
`

export const GoogleButtonText = styled.Text`
    font-family: 'MontserratAlternates_700Bold';
    font-size: 16px;
    text-align: center;
    color: ${Colors.secondary};
    text-transform: uppercase;
`