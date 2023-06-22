import { useState } from "react";
import { TextInput } from "react-native";

export default function InputBox(props: {
	type: string;
	placeholder: string;
	style: object;
	onInputChangeHandler: Function;
	value: string;
}) {
	function handleTextChange(text: string): void {
		props.onInputChangeHandler({
			type: props.type,
			payload: text,
		});
	}

	return (
		<TextInput
			{...props}
			secureTextEntry={props.type === "password" ? true : false}
			placeholder={props.placeholder}
			value={props.value}
			onChangeText={handleTextChange}
			keyboardType={props.type === "email" ? "email-address" : "default"}
		/>
	);
}
