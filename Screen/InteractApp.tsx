import React from "react";
import {
	StyleSheet,
	Text,
	Pressable,
	View,
	ScrollView,
	TouchableOpacity,
	useWindowDimensions,
	Image,
} from "react-native";

import Card from "../Components/UI/Card";

import {
	Ionicons,
	FontAwesome,
	FontAwesome5,
	Feather,
	Entypo,
	AntDesign,
	Octicons,
	MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const InteractApp = () => {
	const { width } = useWindowDimensions();
	const navigator = useNavigation();

	return (
		<View style={[styles.container, { width }]}>
			<Text style={{ fontSize: 25 }}>Apps</Text>
			<View
				style={{
					flexDirection: "row",
					flexWrap: "wrap",
					justifyContent: "space-evenly",
					padding: 10,
					gap: 10,
				}}
			>
				<Pressable
					onPress={() => {
						navigator.navigate("");
					}}
				>
					<Card style={styles.iconCard}>
						<Octicons
							name="file-directory"
							size={50}
							style={{ color: "red" }}
						/>
						<Text>Directory</Text>
					</Card>
				</Pressable>
				<Pressable
					onPress={() => {
						navigator.navigate("");
					}}
				>
					<Card style={styles.iconCard}>
						<MaterialCommunityIcons
							name="account-group-outline"
							size={50}
							color="red"
						/>
						<Text style={{ color: "black" }}>Board of Directors</Text>
					</Card>
				</Pressable>
				<Pressable
					onPress={() => {
						navigator.navigate("blogs");
					}}
				>
					<Card style={styles.iconCard}>
						<FontAwesome5 name="blog" size={50} color="red" />
						<Text style={{ color: "black" }}>Blogs</Text>
					</Card>
				</Pressable>
				<Pressable
					onPress={() => {
						navigator.navigate("");
					}}
				>
					<Card style={styles.iconCard}>
						<FontAwesome5 name="clipboard" size={50} color="red" />
						<Text style={{ color: "black" }}>Attendence</Text>
					</Card>
				</Pressable>
				<Pressable
					onPress={() => {
						navigator.navigate("gallery");
					}}
				>
					<Card style={styles.iconCard}>
						<FontAwesome name="photo" size={50} color="red" />
						<Text style={{ color: "black" }}>Gallery</Text>
					</Card>
				</Pressable>
				<Pressable
					onPress={() => {
						navigator.navigate("");
					}}
				>
					<Card style={styles.iconCard}>
						<FontAwesome name="search" size={50} color="red" />
						<Text style={{ color: "black" }}>Search Club</Text>
					</Card>
				</Pressable>
				<Pressable
					onPress={() => {
						navigator.navigate("");
					}}
				>
					<Card style={styles.iconCard}>
						<AntDesign name="bells" size={50} color="red" />
						<Text style={{ color: "black" }}>Anouncements</Text>
					</Card>
				</Pressable>
				<Pressable
					onPress={() => {
						navigator.navigate("");
					}}
				>
					<Card style={styles.iconCard}>
						<Entypo name="documents" size={50} color="red" />

						<Text style={{ color: "black" }}>Proposals</Text>
					</Card>
				</Pressable>
			</View>
		</View>
	);
};

export default InteractApp;

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		padding: 20,
		gap: 30,
		flex: 1,
		// height: "100%",
		// margin: 10,
		backgroundColor: "white",
	},
	iconCard: {
		backgroundColor: "white",
		elevation: 10,
		justifyContent: "center",
		alignItems: "center",
		gap: 10,
	},
});
