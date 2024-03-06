import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../commonuser/Home';
import { ProfileScreen } from '../commonuser/ProfileScreen';
import { Colors } from '../../utils/Colors';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { ContentIcon, TextIcon } from './style';

const BottomTab = createBottomTabNavigator();

export const Main = () => {
	return (
		<BottomTab.Navigator
			initialRouteName="Home"
			screenOptions={({ route }) => ({
				tabBarStyle: {
					backgroundColor: '#fff',
					height: 60,
					paddingBottom: 0,
				},
				tabBarActiveBackgroundColor: 'transparent',
				tabBarShowLabel: false,
				headerShown: false,

				tabBarActiveTintColor: Colors.secondary_v2,
				tabBarIcon: ({ focused }) => {
					if (route.name === 'Home') {
						return (
							<ContentIcon
								tabBarActiveBackgroundColor={
									focused ? '#ECF2FF' : 'transparent'
								}
							>
								<FontAwesome
									name="calendar"
									size={18}
									color={'#4E4B59'}
								/>

								{focused && <TextIcon>Agenda</TextIcon>}
							</ContentIcon>
						);
					} else {
						return (
							<ContentIcon
								tabBarActiveBackgroundColor={
									focused ? '#ECF2FF' : 'transparent'
								}
							>
								<FontAwesome5
									name="user-circle"
									size={18}
									color={'#4E4B59'}
								/>

								{focused && <TextIcon>Perfil</TextIcon>}
							</ContentIcon>
						);
					}
				},
			})}
		>
			<BottomTab.Screen name="Home" component={Home} />
			<BottomTab.Screen name="Profile" component={ProfileScreen} />
		</BottomTab.Navigator>
	);
};
