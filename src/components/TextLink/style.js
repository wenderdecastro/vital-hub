import styled from "styled-components/native";
import { Colors } from "../../utils/Colors";

export const RawText = styled.Text`
    font-family: 'Quicksand_500Medium';
    font-size: 16px;
    color: ${Colors.gray};
    text-decoration: none;  
    margin-top: 15px;
`

export const BoldText = styled.Text`
    font-family: 'MontserratAlternates_600SemiBold';
    font-size: 16px;
    color: ${Colors.gray};
    text-decoration: none;  
`

export const Link = styled.Text`
    font-family: 'MontserratAlternates_600SemiBold';
    font-size: 16px;
    color: ${(props) => props.linkColor};
    text-decoration: underline;
`

export const ForgotPasswordLink = styled.Text`
font-size: 16px;
font-family: "MontserratAlternates_500Medium";
color: ${Colors.gray_v4};
align-self: flex-start;
text-decoration: underline;
`
