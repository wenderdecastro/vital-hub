import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../commonuser/Home';
import { ProfileScreen } from '../commonuser/ProfileScreen';
import { Colors } from '../../utils/Colors';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator();

export const Main = () => {
	return (
		<BottomTab.Navigator
			initialRouteName="Home"
			screenOptions={({ route }) => ({
				tabBarStyle: {
					backgroundColor: '#fff',
					height: 60,
					paddingTop: 10,
				},
				tabBarActiveBackgroundColor: 'transparent',
				tabBarShowLabel: false,
				headerShown: false,

				tabBarActiveTintColor: Colors.secondary_v2,
				tabBarIcon: ({ focused }) => {
					if (route.name === 'Home') {
						return <></>;
					} else {
					}
				},
			})}
		>
			<BottomTab.Screen name="Home" component={Home} />
			<BottomTab.Screen name="Profile" component={ProfileScreen} />
		</BottomTab.Navigator>
	);
};
