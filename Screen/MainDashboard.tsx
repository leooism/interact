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
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import Carousel from "../Components/Carousel";
import Card from "../Components/UI/Card";
import { Feather } from "@expo/vector-icons";
import { Entypo, AntDesign } from "@expo/vector-icons";
import Header from "../Components/Header";
const data = [{ value: 15 }, { value: 30 }, { value: 26 }, { value: 40 }];

import { Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
						<Pressable>
							<Card style={styles.iconCard}>
								<Octicons
									name="file-directory"
									size={50}
									style={{ color: "red" }}
								/>
								<Text>Directory</Text>
							</Card>
						</Pressable>
						<Pressable>
							<Card style={styles.iconCard}>
								<MaterialCommunityIcons
									name="account-group-outline"
									size={50}
									color="red"
								/>
								<Text style={{ color: "black" }}>Board of Directors</Text>
							</Card>
						</Pressable>
						<Pressable>
							<Card style={styles.iconCard}>
								<FontAwesome5 name="blog" size={50} color="red" />
								<Text style={{ color: "black" }}>Blogs</Text>
							</Card>
						</Pressable>
						<Pressable>
							<Card style={styles.iconCard}>
								<FontAwesome5 name="clipboard" size={50} color="red" />
								<Text style={{ color: "black" }}>Attendence</Text>
							</Card>
						</Pressable>
						<Pressable>
							<Card style={styles.iconCard}>
								<FontAwesome name="photo" size={50} color="red" />
								<Text style={{ color: "black" }}>Gallery</Text>
							</Card>
						</Pressable>
						<Pressable>
							<Card style={styles.iconCard}>
								<FontAwesome name="search" size={50} color="red" />
								<Text style={{ color: "black" }}>Search Club</Text>
							</Card>
						</Pressable>
						<Pressable>
							<Card style={styles.iconCard}>
								<AntDesign name="bells" size={50} color="red" />
								<Text style={{ color: "black" }}>Anouncements</Text>
							</Card>
						</Pressable>
						<Pressable>
							<Card style={styles.iconCard}>
								<Entypo name="documents" size={50} color="red" />

								<Text style={{ color: "black" }}>Proposals</Text>
							</Card>
						</Pressable>
					</View>
				</View>
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
	iconCard: {
		backgroundColor: "white",
		elevation: 10,
		justifyContent: "center",
		alignItems: "center",
		gap: 10,
	},
});
