import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import Gallery from "../Components/Gallery";
import MainDashboard from "../Screen/MainDashboard";
const AppNavigator = () => {
	console.log("hi");
	return (
		<NavigationContainer independent={true} initialRouteName="appView">
			<Stack.Navigator>
				<Stack.Screen
					name="appView"
					component={MainDashboard}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					component={Gallery}
					name="gallery"
					options={{
						title: "Gallery",
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigator;
