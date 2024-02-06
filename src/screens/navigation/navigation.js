import { Button, View } from "react-native"
import { Login } from "../login/login"

export const Navigation = ({navigation}) => {
    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Button 
                title="Login"
                onPress={() => navigation.navigate("Login")}
            />
        </View>
    )
}