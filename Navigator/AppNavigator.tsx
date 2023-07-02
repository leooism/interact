import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import Gallery from "../Components/Gallery";
import MainDashboard from "../Screen/MainDashboard";
import Blogs from "../Screen/Blogs";
const AppNavigator = () => {
	return (
		<NavigationContainer independent={true} initialRouteName="appView">
			<Stack.Navigator id="hi">
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
				<Stack.Screen
					name="blogs"
					component={Blogs}
					options={{
						headerShown: false,
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigator;
