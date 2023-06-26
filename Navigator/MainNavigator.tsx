import PersonalInfo from "../Screen/PersonalInfo";
import { Text, Image } from "react-native";
import { createMyNavigator } from "../BottomNavigation";

const My = createMyNavigator();
import { Ionicons } from "@expo/vector-icons";

import React from "react";
import MainDashboard from "../Screen/MainDashboard";
import AppNavigator from "./AppNavigator";
function Test() {
	return <Text>Hi</Text>;
}
export default function MainNavigator() {
	return (
		<My.Navigator
			tabBarStyle={{
				width: "100%",
				elevation: 2,
				borderTopEndRadius: 10,
				flexDirection: "row",
				gap: 30,
				padding: 5,
				justifyContent: "center",
				alignItems: "center",
				marginVertical: 0,
				// marginHorizontal: 20,
				position: "relative",
				backgroundColor: "white",
			}}
			initialRouteName="Interact"
			contentStyle={{}}
		>
			<My.Screen
				name="Drive"
				component={Text}
				options={{
					type: "icon",
					renderChild: () => (
						<Image
							source={require("../assets/Google_Drive_Logo_512px.png")}
							style={{ width: 35, height: 35 }}
						/>
					),
				}}
			/>
			<My.Screen
				name="Chat"
				component={Test}
				options={{
					type: "image",
					renderChild: () => (
						<Ionicons name="chatbubble-outline" size={40} color="black" />
					),
				}}
			/>

			<My.Screen
				name="Interact"
				component={AppNavigator}
				options={{
					type: "image",
					style: {
						width: 70,
						height: 70,
						backgroundColor: "white",
						top: -35,
						borderRadius: 40,
						elevation: 20,
						zIndex: 100,
					},
					renderChild: () => (
						<Image
							source={{ uri: "https://interactclubofggic.org/log.png" }}
							style={{ height: "100%", width: "100%", borderRadius: 40 }}
						/>
					),
				}}
			/>
			<My.Screen
				name="Calendar"
				component={Test}
				options={{
					type: "image",
					renderChild: () => (
						<Ionicons name="calendar-outline" size={40} color="black" />
					),
				}}
			/>
			<My.Screen
				name="PersonalInfo"
				component={PersonalInfo}
				options={{
					type: "image",
					renderChild: () => (
						<Ionicons name="person-outline" size={40} color="black" />
					),
				}}
			/>
		</My.Navigator>
	);
}
