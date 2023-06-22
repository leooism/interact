import { Pressable, View } from "react-native";
import type { PropsWithChildren } from "react";

export default function Button(
	props: {
		style?: object;
		buttonHandler?: any;
	} & { children: PropsWithChildren }
) {
	const children = props.children;
	return (
		<Pressable style={props.style} onPressIn={props.buttonHandler}>
			{children}
		</Pressable>
	);
}
