import { ImageBackground } from "react-native";
import { PropsWithChildren } from "react";

export default function LoginBackground(props: PropsWithChildren) {
	return (
		<ImageBackground
			source={require("../assets/icon1.png")}
			style={{ flex: 1, width: "100%", height: "50%" }}
		>
			{props.children}
		</ImageBackground>
	);
}
