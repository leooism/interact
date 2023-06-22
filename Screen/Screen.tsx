import { PropsWithChildren } from "react";
import { StatusBar, View } from "react-native";

export default function Screen(props: PropsWithChildren) {
	return (
		<View style={{ paddingTop: StatusBar.currentHeight }}>
			{props.children}
		</View>
	);
}
