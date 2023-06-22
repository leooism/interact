import { StyleSheet, Text, View, Image } from "react-native";
import Login from "./Screen/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ForgotPassword from "./Screen/ForgotPassword";
const Stack = createNativeStackNavigator();
import { createMyNavigator } from "./BottomNavigation";
import MainDashboard from "./Screen/MainDashboard";
import React from "react";

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="login"
					component={Login}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="ForgotPassword"
					component={ForgotPassword}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="Home"
					component={MainDashboard}
					options={{
						headerShown: false,
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
