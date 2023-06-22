import { View } from "react-native";

export default function CarouselPagination() {
	return (
		<View
			style={{
				flexDirection: "row",
				justifyContent: "center",
				gap: 5,
			}}
		>
			<View
				style={{
					width: 10,
					height: 10,
					borderRadius: 50,
					elevation: 10,
					backgroundColor: "#ffff",
				}}
			></View>
			<View
				style={{
					width: 10,
					height: 10,
					borderRadius: 50,
					elevation: 10,
					backgroundColor: "#ffff",
				}}
			></View>
			<View
				style={{
					width: 10,
					height: 10,
					borderRadius: 50,
					elevation: 10,
					backgroundColor: "#ffff",
				}}
			></View>
			<View
				style={{
					width: 10,
					height: 10,
					borderRadius: 50,
					elevation: 10,
					backgroundColor: "#ffff",
				}}
			></View>
			{/* <Image
source={{
    uri: "https://res.cloudinary.com/interactclubofggic/raw/upload/v1/media/files/2023/01/19/event/image2_y9f8ye.JPG",
}}
style={{ width: "100%", height: 100, borderRadius: 10 }}
/> */}
		</View>
	);
}
