import { PropsWithChildren } from "react";
import { SafeAreaView, StatusBar } from "react-native";

export default function Screen(props: PropsWithChildren) {
	return (
		<SafeAreaView
			style={{
				paddingTop: StatusBar.currentHeight,
				flex: 1,
				backgroundColor: "white",
			}}
		>
			{props.children}
		</SafeAreaView>
	);
}
