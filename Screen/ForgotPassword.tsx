import {
	View,
	Image,
	StatusBar,
	Text,
	TextInput,
	Pressable,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { useNavigation, type NavigationProp } from "@react-navigation/native";
const ForgotPassword = () => {
	const navigation = useNavigation();
	return (
		<View
			style={{
				paddingTop: StatusBar.currentHeight,
				flex: 1,
				alignItems: "center",
				gap: 40,
			}}
		>
			<View
				style={{
					width: "100%",
					padding: 10,
					justifyContent: "flex-start",
				}}
			>
				<AntDesign
					name="back"
					size={24}
					color="black"
					style={{ marginLeft: 10 }}
					onPress={() => {
						navigation.goBack();
					}}
				/>
			</View>
			<View
				style={{
					width: "100%",
					justifyContent: "center",
					alignItems: "center",
					flex: 0.7,
				}}
			>
				<Image
					source={require("../assets/passwordLock.png")}
					style={{ width: "80%", maxHeight: 230 }}
				/>
			</View>
			<View style={{ width: "80%", gap: 5 }}>
				<Text style={{ fontSize: 30, textAlign: "center" }}>
					Forgot Your Password?
				</Text>
				<Text style={{ fontSize: 12 }}>
					You will be provided with reset email address.
				</Text>
				<View style={{ gap: 30 }}>
					<TextInput
						placeholder="Enter your email"
						style={{
							borderWidth: 1,
							padding: 9,
							paddingLeft: 20,
							width: "100%",
							borderRadius: 10,
						}}
					/>
					<Pressable
						style={{
							alignItems: "center",
							justifyContent: "center",
							paddingVertical: 12,
							paddingHorizontal: 32,
							borderRadius: 4,
							elevation: 3,
							backgroundColor: "#ff3ddf",
						}}
					>
						<Text
							style={{
								fontSize: 16,
								lineHeight: 21,
								fontWeight: "bold",
								letterSpacing: 0.25,
								color: "white",
							}}
						>
							Login
						</Text>
					</Pressable>
				</View>
			</View>
		</View>
	);
};

export default ForgotPassword;
