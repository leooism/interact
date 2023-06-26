import { StyleSheet, Text, View, Image } from "react-native";
import Login from "./Screen/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ForgotPassword from "./Screen/ForgotPassword";
import React, { useState } from "react";
import MainNavigator from "./Navigator/MainNavigator";
import PersonalInfo from "./Screen/PersonalInfo";
const Stack = createNativeStackNavigator();

export default function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(true);
	return (
		<NavigationContainer>
			<Stack.Navigator>
				{!isLoggedIn ? (
					<>
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
					</>
				) : (
					<>
						<Stack.Screen
							name="Home"
							component={MainNavigator}
							options={{
								headerShown: false,
							}}
						/>
						<Stack.Screen
							name="PersonalInfo"
							component={PersonalInfo}
							options={{
								headerShown: false,
							}}
						/>
					</>
				)}
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
