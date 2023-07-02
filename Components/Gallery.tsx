import React, { useEffect, useMemo, useState } from "react";
import {
	Text,
	View,
	StyleSheet,
	Image,
	Dimensions,
	Animated,
	Pressable,
	Alert,
	TouchableOpacity,
	ImageBackground,
} from "react-native";

import {
	Gesture,
	GestureDetector,
	GestureHandlerRootView,
} from "react-native-gesture-handler";

import { MYPIXEX_APIKEY, URL } from "@env";
// import ImageItem from "./ImageItem";
import useFetch from "../hooks/useFetch";
import { AntDesign } from "@expo/vector-icons";

export interface ImageType {
	id?: Number;
	photographer?: String;
	photographerUrl?: String;
	src?: {
		portrait: String;
		original: String;
	};
	alt?: String;
	key?: String;
}

import ShimmerPlaceholder from "react-native-shimmer-placeholder";
// import LinearGradient from "expo-linear-gradient";

const width = Dimensions.get("window").width;
const ImageWidth = Dimensions.get("window").width * 0.8;

const SPACER_ITEM_SIZE = (width - ImageWidth) / 2;

const Gallery = () => {
	const [images, setImages] = useState<ImageType[]>([] as ImageType[]);
	const [tapNumber, setTapNumber] = useState(0);
	const [idLoved, setIsLoved] = useState(false);

	const { loadingState, fetchValue } = useFetch();
	const scale = React.useRef(new Animated.Value(0)).current;
	const scrollX = React.useRef(new Animated.Value(0)).current;

	useEffect(() => {
		const filterMyData = (data: any) => {
			if ("photos" in data) {
				const filterdPhotoData = data.photos.map((photo: any) => {
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
				setImages([
					{ key: "left-spacer" },
					...filterdPhotoData,
					{ key: "right-spacer" },
				]);
			}
		};
		fetchValue(
			URL,
			{
				method: "GET",
				Authorization: MYPIXEX_APIKEY,
			},
			filterMyData
		);
	}, [setImages]);

	return (
		<View style={styles.container}>
			{loadingState && images.length === 0 ? (
				<Text>Loading</Text>
			) : (
				// <ShimmerPlaceHolder LinearGradient={Linear} />
				<View style={{ gap: 20 }}>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "flex-end",
							marginHorizontal: 20,
						}}
					>
						<Pressable
							style={{
								flexDirection: "row",
								justifyContent: "space-evenly",
								alignItems: "center",
								paddingVertical: 5,
								paddingHorizontal: 20,
								backgroundColor: "#00002d",
								borderRadius: 40,
								gap: 20,
							}}
						>
							<Text style={{ color: "white", fontSize: 20, fontWeight: "500" }}>
								Create
							</Text>
							<AntDesign name="camerao" size={40} color="white" />
						</Pressable>
					</View>
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
							width,
						}}
						contentContainerStyle={{
							paddingTop: 20,
							height: "100%",
						}}
						horizontal
						renderItem={({ item, index }) => {
							if (!item.photographer) {
								return <View style={{ width: SPACER_ITEM_SIZE }} />;
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

							const doubleTap = Gesture.Tap()
								.numberOfTaps(2)
								.maxDuration(650)
								.onStart(() => {
									Animated.timing(scale, {
										toValue: 1,
										delay: 0,
										useNativeDriver: true,
									}).start(({ finished }) => {
										scale.setValue(0);
									});
								});
							return (
								<GestureHandlerRootView>
									<GestureDetector gesture={Gesture.Exclusive(doubleTap)}>
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
												position: "relative",
												marginHorizontal: 2,
											}}
										>
											<Image
												source={{ uri: item.src?.original.toString() }}
												style={{
													width: "100%",
													height: "80%",
													objectFit: "contain",
													borderRadius: 30,
												}}
											></Image>
											<Animated.View
												style={[
													{
														position: "absolute",
														top: "50%",
														left: "40%",
														zIndex: 1,
													},
													{
														transform: [
															{
																scale: scale,
															},
														],
													},
												]}
											>
												<AntDesign name="heart" size={50} color="red" />
											</Animated.View>

											<View
												style={{
													flexDirection: "row",
													gap: 20,
													justifyContent: "center",
													alignItems: "center",
												}}
											>
												<Text style={{ fontWeight: "600" }}>
													By: {item.photographer}
												</Text>
											</View>
										</Animated.View>
									</GestureDetector>
								</GestureHandlerRootView>
							);
						}}
					/>
				</View>
			)}
		</View>
	);
};

export default Gallery;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		padding: 10,
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
		gap: 10,
	},
});
