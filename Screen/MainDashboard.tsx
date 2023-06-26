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
import Screen from "../Screen/Screen";
import Carousel from "../Components/Carousel";
import Card from "../Components/UI/Card";
import Header from "../Components/Header";
import { Feather, Entypo } from "@expo/vector-icons";
import InteractApp from "../Screen/InteractApp";

import AppNavigator from "../Navigator/AppNavigator";

const MainDashboard = () => {
	const { width } = useWindowDimensions();
	return (
		<Screen>
			<ScrollView horizontal style={{ flex: 1 }} bounces={false}>
				<ScrollView>
					<View style={[styles.container, { width }]}>
						<Header />
						<View style={styles.hero}>
							<View>
								<Text style={{ fontSize: 24 }}>Good Morning</Text>
								<Text style={{ fontWeight: "900", fontSize: 20 }}>
									Itr. Bidhan Bhandari
								</Text>
							</View>
							<Carousel />
						</View>

						<Card style={{ width: "90%", backgroundColor: "white", gap: 10 }}>
							<Text style={{ fontSize: 20 }}>Meetings</Text>
							<View style={{ gap: 10 }}>
								<Text style={{ fontSize: 15 }}>Meetinng title</Text>
								<View style={styles.meetingBtns}>
									<Feather name="clock" size={24} color="white" />
									<Text style={{ color: "white" }}>Hello dear</Text>
									<Entypo name="dots-three-vertical" size={24} color="white" />
								</View>
								<View style={styles.meetingBtns}>
									<Feather name="calendar" size={24} color="white" />
									<Text style={{ color: "white" }}>Hello my love</Text>
									<Entypo name="dots-three-vertical" size={24} color="white" />
								</View>
							</View>
							<View style={{ gap: 10 }}>
								<Text>Attendees</Text>
								<View
									style={{
										flexDirection: "row",
										alignItems: "center",
										justifyContent: "space-between",
									}}
								>
									<View style={{ flexDirection: "row" }}>
										<Image
											source={{
												uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
											}}
											style={{ width: 40, height: 40, borderRadius: 50 }}
										/>
										<Image
											source={{
												uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
											}}
											style={{ width: 40, height: 40, borderRadius: 50 }}
										/>
										<Image
											source={{
												uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
											}}
											style={{ width: 40, height: 40, borderRadius: 50 }}
										/>
										<Image
											source={{
												uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
											}}
											style={{ width: 40, height: 40, borderRadius: 50 }}
										/>
									</View>
									<Text>Send Invitation</Text>
								</View>
							</View>
						</Card>
						<Card style={{ width: "90%", backgroundColor: "white" }}>
							<Text>Total Projects</Text>
						</Card>
					</View>
				</ScrollView>
				<InteractApp />
			</ScrollView>
		</Screen>
	);
};

export default MainDashboard;

const styles = StyleSheet.create({
	meetingBtns: {
		backgroundColor: "blue",
		borderRadius: 10,
		padding: 10,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	container: {
		alignItems: "center",
		padding: 20,
		gap: 30,
		flex: 1,
		// height: "100%",
		// margin: 10,
		backgroundColor: "white",
	},

	hero: {
		gap: 20,
		width: "100%",
	},
});
