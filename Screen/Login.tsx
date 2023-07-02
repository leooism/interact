import {
	View,
	StyleSheet,
	StatusBar,
	Text,
	Pressable,
	Alert,
} from "react-native";
import LoginImageBackground from "../Components/LoginImageBackground";

import { FontAwesome5 } from "@expo/vector-icons";
import { useEffect, useReducer, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import InputBox from "../Components/InputBox";
import Button from "../Components/UI/Button";
interface loginCredentialsType {
	email: string;
	password: string;
}
interface loginCredentialAction {
	type: string;
	payload: string;
}
const loginCredientalsReducer = (
	state: loginCredentialsType,
	action: loginCredentialAction
): loginCredentialsType => {
	switch (action.type) {
		case "email":
			if (!action.playload.includes("@")) return;
			return {
				...state,
				email: action.payload,
			};

		case "password":
			return {
				...state,
				password: action.payload,
			};

		default:
			return state;
	}
};

const Login = () => {
	const [loginCredentials, dispatch] = useReducer(loginCredientalsReducer, {
		email: "",
		password: "",
	});
	const [isDarkTheme, setIsDarkTheme] = useState(false);
	const [IsvalidDetails, setValidDetails] = useState(false);

	useEffect(() => {
		const unsubscribe = setTimeout(() => {
			if (
				loginCredentials.email.length <= 0 &&
				loginCredentials.password.length <= 0
			) {
				setValidDetails(false);
				return;
			}

			setValidDetails(true);
		}, 2000);

		return () => clearTimeout(unsubscribe);
	}, [loginCredentials.email, loginCredentials.password]);

	const onLoginHandler = () => {
		navigation.navigate("Home");
		return;
		if (!IsvalidDetails) {
			Alert.alert(
				"Fill up all details.",
				"You must fill the login credientials given by your respective club.",
				[
					{
						text: "Okay",
						style: "cancel",
					},
				]
			);
			return;
		}
	};
	const toggleThemeHandler = () => {
		setIsDarkTheme((prev) => !prev);
	};
	const navigation = useNavigation();

	return (
		<LoginImageBackground>
			<View style={styles.loginHeader}>
				<Pressable onPressIn={toggleThemeHandler}>
					{isDarkTheme ? (
						<FontAwesome5 name="toggle-on" size={50} color="white" />
					) : (
						<FontAwesome5 name="toggle-off" size={50} color="black" />
					)}
				</Pressable>
			</View>
			<View style={styles.loginHeroText}>
				<Text
					style={{
						width: 250,
						fontSize: 20,
						textAlign: "center",
						color: "#ffff",
						top: 60,
					}}
				>
					Stay Conected With YOur Club Activity
				</Text>
			</View>

			<View style={styles.loginFormContainer}>
				<Text style={styles.loginText}>Login</Text>
				<View style={styles.loginForm}>
					<InputBox
						placeholder="Enter your email"
						style={{
							borderWidth: 1,
							padding: 9,
							paddingLeft: 20,
							width: "100%",
							borderRadius: 10,
						}}
						type="email"
						value={loginCredentials.email}
						onInputChangeHandler={dispatch}
					/>
					<InputBox
						placeholder="Enter your password"
						style={{
							borderWidth: 1,
							padding: 9,
							paddingLeft: 20,
							width: "100%",
							borderRadius: 10,
						}}
						type="password"
						value={loginCredentials.password}
						onInputChangeHandler={dispatch}
					/>
					<Button
						style={{
							alignItems: "center",
							justifyContent: "center",
							paddingVertical: 12,
							paddingHorizontal: 32,
							borderRadius: 4,
							elevation: 3,
							backgroundColor: "skyblue",
						}}
						buttonHandler={onLoginHandler}
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
					</Button>
					<Text
						style={{ textAlign: "center", textDecorationColor: "red" }}
						onPress={() => {
							navigation.navigate("ForgotPassword");
						}}
					>
						Forgot Your Password?
					</Text>
				</View>
			</View>
		</LoginImageBackground>
	);
};

export default Login;

const styles = StyleSheet.create({
	loginForm: {
		justifyContent: "center",
		width: "80%",
		gap: 20,
	},
	loginContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	loginHeroText: {
		flex: 0.5,
		// backgroundColor: "red",
		// justifyContent: "center",
		alignItems: "center",
	},
	toggleButton: {
		width: 20,
		height: 20,
	},
	loginHeader: {
		paddingTop: StatusBar.currentHeight,
		marginRight: 30,
		flexDirection: "row",
		justifyContent: "flex-end",
	},

	loginFormContainer: {
		flex: 0.5,
		alignItems: "center",
		gap: 30,
	},
	loginText: {
		fontSize: 20,
		fontWeight: "bold",
	},
});
