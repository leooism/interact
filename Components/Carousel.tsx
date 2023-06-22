import { View, Text, StyleSheet, Image } from "react-native";
import CarouselPagination from "./CarouselPagination";
import { v4 as uuidv4 } from "uuid";

const Events = [
	{
		id: 1,
	},
];

export default function Carousel() {
	return (
		<View style={styles.carouselContainer}>
			<View style={styles.carousel}>
				<View style={{ flex: 0.7, position: "relative" }}>
					<Text
						style={{
							color: "#fff",
							position: "absolute",
							top: 0,
							left: 0,
							fontSize: 20,
							padding: 5,
							zIndex: 1,
						}}
					>
						Interact Events
					</Text>
					<Image
						source={{
							uri: "https://res.cloudinary.com/interactclubofggic/raw/upload/v1/media/files/2023/01/19/event/image2_y9f8ye.JPG",
						}}
						style={{ width: "100%", height: 200, borderRadius: 10 }}
					/>
				</View>
				<View style={{ flex: 0.3 }}>
					<Image
						source={{
							uri: "https://res.cloudinary.com/interactclubofggic/raw/upload/v1/media/files/2023/01/19/event/image2_y9f8ye.JPG",
						}}
						style={{ width: "100%", height: 200, borderRadius: 10 }}
					/>
				</View>
			</View>
			<CarouselPagination />
		</View>
	);
}

const styles = StyleSheet.create({
	carouselContainer: {
		gap: 5,
	},
	carousel: {
		width: "100%",
		flexDirection: "row",
		gap: 5,
		height: 200,
	},
});
