import { Colors } from "../../utils/Colors";
import { Circle } from "./style"
import { Ionicons } from '@expo/vector-icons';

export const BackButton = () => {
    return(
        <Circle>
            <Ionicons name="arrow-back-sharp" size={24} color={Colors.primary_v1} />
        </Circle>
    )
}

export const CloseButton = () => {
    return(
        <Circle>
            <Ionicons name="close-sharp" size={24} color={Colors.primary_v1} />
        </Circle>
    )
}
