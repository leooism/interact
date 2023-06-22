import { Text, StyleSheet, View, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../Components/UI/Button";
import Card from "../Components/UI/Card";
export default function PersonalInfo() {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.headerContainer}>
				<Text style={styles.headerText}>Personal Information</Text>
				<Text style={styles.headerSubText}>
					Personalize your settings. Your request will be only accepted after
					the validation from the admin
				</Text>
			</View>
			<Card
				style={{
					width: "80%",
					padding: 25,
					gap: 20,
					backgroundColor: "white",
					position: "relative",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<View
					style={{
						flex: 1,
						backgroundColor: "red",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<View
						style={{
							top: -30,
							width: 100,
							height: 100,
							elevation: 20,
							borderRadius: 50,
							backgroundColor: "white",
						}}
					>
						<Image
							source={require("../assets/passwordLock.png")}
							style={{ width: "100%", height: "100%" }}
						/>
					</View>
				</View>
				<View
					style={{ justifyContent: "center", alignItems: "center", gap: 10 }}
				>
					<View>
						<Text>Itr Bidhan Bhandari</Text>
						<Text style={{ textAlign: "center" }}>Treasurer</Text>
					</View>
					<View style={{ flexDirection: "row", gap: 10 }}>
						<Text>📞</Text>
						<Text>🗨️</Text>
						<Text>🎥</Text>
					</View>
				</View>
			</Card>
			<Card
				style={{
					width: "80%",
					padding: 20,
					gap: 10,
					backgroundColor: "white",
				}}
			>
				<View>
					<Text style={{ fontSize: 20 }}>Full Name</Text>
					<Text style={{ fontSize: 15, color: "gray" }}>
						Itr Bidhan Bhandari
					</Text>
				</View>
				<View>
					<Text style={{ fontSize: 20 }}>Address</Text>
					<Text style={{ fontSize: 15, color: "gray" }}>
						Macchapuchhre-7, Kaski
					</Text>
				</View>
				<View>
					<Text style={{ fontSize: 20 }}>Email</Text>
					<Text style={{ fontSize: 15, color: "gray" }}>
						leooism10@gmail.com{" "}
					</Text>
				</View>
				<View>
					<Text style={{ fontSize: 20 }}>Date of Birth</Text>
					<Text style={{ fontSize: 15, color: "gray" }}>2004-02-20</Text>
				</View>
			</Card>
			<Button
				style={{
					backgroundColor: "blue",
					padding: 15,
					width: "80%",
					borderRadius: 10,
				}}
			>
				<Text
					style={{
						fontSize: 20,
						lineHeight: 21,
						fontWeight: "bold",
						letterSpacing: 0.25,
						color: "white",
						textAlign: "center",
					}}
				>
					Save Changes
				</Text>
			</Button>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	headerContainer: {
		gap: 5,
		justifyContent: "center",
		alignItems: "flex-start",
		marginBottom: 50,
	},
	container: {
		padding: 20,
		justifyContent: "center",
		alignItems: "center",
		gap: 10,
	},
	headerSubText: {
		textAlign: "center",
	},
	headerText: {
		fontSize: 25,
		fontWeight: "900",
	},
});
