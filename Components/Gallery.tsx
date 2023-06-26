import React, { useEffect, useState } from "react";
import {
	Text,
	View,
	StyleSheet,
	Image,
	Dimensions,
	FlatList,
	Animated,
	TouchableOpacity,
} from "react-native";
import { MYPIXEX_APIKEY } from "@env";
import Card from "./UI/Card";
import fetchImage from "../api/fetchImage";
const APIKEY = "";
const URL = "https://api.pexels.com/v1/curated?page=2&per_page=40";
interface ImageType {
	id: Number;
	photographer: String;
	photographerUrl: String;
	src: {
		portrait: String;
		original: String;
	};
	alt: String;
}

import { AntDesign } from "@expo/vector-icons";
const width = Dimensions.get("window").width;
const ImageWidth = Dimensions.get("window").width * 0.8;
const ImageHeight = Dimensions.get("window").height * 0.8;
const Gallery = () => {
	const [images, setImages] = useState<ImageType[]>({} as ImageType);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		fetch(URL, {
			headers: {
				method: "GET",
				Authorization: MYPIXEX_APIKEY,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				if ("photos" in data) {
					const filterdPhotoData = data.photos.map((photo) => {
						return {
							id: photo.id,
							photographer: photo.photographer,
							photographerUrl: photo.photographer_url,
							src: {
								original: photo.src.original,
								portrait: photo.src.portrait,
							},
							alt: photo.alt,
						};
					});
					setImages((prev) => {
						return [
							{ key: "left-spacer" },
							...filterdPhotoData,
							{ key: "right-spacer" },
						];
					});
				}
			})
			.catch((err) => {})
			.finally(() => setIsLoading(false));
	}, []);

	const scrollX = React.useRef(new Animated.Value(0)).current;
	const SPACER_ITEM_SIZE = (width - ImageWidth) / 2;
	return (
		<View style={styles.container}>
			{isLoading && images.length === 0 ? (
				<Text>Loading</Text>
			) : (
				<Animated.FlatList
					onScroll={Animated.event(
						[{ nativeEvent: { contentOffset: { x: scrollX } } }],
						{
							useNativeDriver: true,
						}
					)}
					scrollEventThrottle={16}
					data={images}
					style={{
						flex: 1,
						marginTop: 20,
						width,
					}}
					horizontal
					bounces={false}
					backfaceVisibility="hidden"
					pagingEnabled
					snapToInterval={ImageWidth}
					decelerationRate={0}
					renderItem={({ item, index }) => {
						if (!item.photographer) {
							return (
								<View
									style={{ width: SPACER_ITEM_SIZE, backgroundColor: "red" }}
								/>
							);
						}
						const inputRange = [
							(index - 2) * ImageWidth,
							(index - 1) * ImageWidth,
							index * ImageWidth,
						];
						const translateY = scrollX.interpolate({
							inputRange,
							outputRange: [0, -50, 0],
						});
						return (
							<Animated.View
								style={{
									width: ImageWidth,
									height: "100%",
									justifyContent: "center",
									alignItems: "center",
									padding: 10,
									// marginHorizontal: ,
									gap: 20,
									transform: [{ translateY }],
								}}
							>
								<Image
									source={{ uri: item.src?.original.toString() }}
									style={{
										width: "100%",
										height: "80%",
										borderRadius: 20,
									}}
									alt="hi"
								/>
								<View
									style={{
										flexDirection: "row",
										gap: 20,
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									<TouchableOpacity>
										<AntDesign name="heart" size={40} color="red" />
									</TouchableOpacity>
									<TouchableOpacity>
										<AntDesign name="like1" size={40} color="blue" />
									</TouchableOpacity>
								</View>
							</Animated.View>
						);
					}}
				/>
			)}
		</View>
	);
};

export default Gallery;

const styles = StyleSheet.create({
	container: {
		padding: 10,
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
	},
});
