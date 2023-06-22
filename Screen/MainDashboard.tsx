import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import Screen from "../Screen/Screen";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Carousel from "../Components/Carousel";

import MainNavigator from "../Navigator/MainNavigator";
const MainDashboard = () => {
	return (
		<Screen>
			<View style={styles.container}>
				<View style={styles.header}>
					<TouchableOpacity>
						<Ionicons
							name="ios-menu-outline"
							size={30}
							color="black"
							style={{ flex: 0.7 }}
						/>
					</TouchableOpacity>
					<View
						style={{
							flex: 0.25,
							flexDirection: "row",
							gap: 10,
							justifyContent: "space-between",
						}}
					>
						<TouchableOpacity>
							<Ionicons name="notifications-outline" size={30} color="black" />
						</TouchableOpacity>
						<TouchableOpacity>
							<FontAwesome name="toggle-off" size={30} color="black" />
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.hero}>
					<View>
						<Text style={{ fontSize: 24 }}>Good Morning</Text>
						<Text style={{ fontWeight: "900", fontSize: 20 }}>
							Itr. Bidhan Bhandari
						</Text>
					</View>
					<Carousel />
				</View>
			</View>
			<MainNavigator />
		</Screen>
	);
};

export default MainDashboard;

const styles = StyleSheet.create({
	container: {
		padding: 20,
		gap: 30,
		borderWidth: 1,
		borderColor: "red",
		height: "100%",
		position: "relative",
		backgroundColor: "white",
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	hero: {
		gap: 20,
	},
});
