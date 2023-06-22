import React, { PropsWithChildren } from "react";
import { View, StyleSheet } from "react-native";

const Card = (props: { style: Object; children: PropsWithChildren }) => {
	return (
		<View style={{ ...styles.Card, ...props.style }}>{props.children}</View>
	);
};

export default Card;

const styles = StyleSheet.create({
	Card: {
		elevation: 20,
		borderRadius: 15,
		padding: 20,
	},
});
