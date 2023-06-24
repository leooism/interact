import React, { useState } from "react";
import {
	View,
	TouchableOpacity,
	StyleSheet,
	Text,
	ImageBackground,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
const Header = () => {
	const [showBarMenu, setShowBarMenu] = useState(false);
	const onBarClickHandler = () => {
		setShowBarMenu((prev) => !prev);
	};
	return (
		<View style={[styles.header]}>
			<TouchableOpacity onPress={onBarClickHandler}>
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
			{showBarMenu ? (
				<ImageBackground
					source={require("../assets/BarEllipse.png")}
					style={{
						width: 200,
						height: 400,
						objectFit: "contain",
						position: "absolute",
						left: -80,
						top: 40,
					}}
				>
					<TouchableOpacity
						style={{ position: "absolute", left: 60, top: "45%" }}
						onPress={onBarClickHandler}
					>
						<AntDesign name="closecircleo" size={40} color="black" />
					</TouchableOpacity>
					<TouchableOpacity style={{ position: "absolute", left: 75, top: 40 }}>
						<MaterialIcons name="event-note" size={50} color="black" />
					</TouchableOpacity>

					<TouchableOpacity
						style={{ position: "absolute", left: 120, top: 120 }}
					>
						<Feather name="list" size={50} color="black" />
					</TouchableOpacity>
					<TouchableOpacity
						style={{ position: "absolute", left: 140, top: 200 }}
					>
						<AntDesign name="team" size={50} color="black" />
					</TouchableOpacity>
					<TouchableOpacity
						style={{ position: "absolute", left: 110, top: 280 }}
					>
						<Feather name="info" size={50} color="black" />
					</TouchableOpacity>
				</ImageBackground>
			) : (
				<></>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		width: "100%",
		position: "relative",
		zIndex: 1,

		flexDirection: "row",
		justifyContent: "space-between",
	},
});
export default Header;
