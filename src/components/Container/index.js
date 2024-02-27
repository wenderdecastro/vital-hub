import { StatusBar } from 'expo-status-bar';
import { ContainerBox, ContainerContent } from './style';

export const Container = ({ children }) => {
	return (
		<ContainerBox>
			<StatusBar backgroundColor="transparent" />
			<ContainerContent>{children}</ContainerContent>
		</ContainerBox>
	);
};
