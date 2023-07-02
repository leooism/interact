import React, { useRef } from "react";
import Screen from "./Screen";
import {
	Text,
	View,
	ScrollView,
	useWindowDimensions,
	Pressable,
	FlatList,
} from "react-native";
import Card from "../Components/UI/Card";

import myData from "../api/randomData.tsx";

import displayRatings from "../util/displayRatings";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
const HeaderComponent = () => {
	return (
		<View style={{ gap: 10 }}>
			<Text
				style={{
					fontSize: 20,
					fontWeight: "500",
					zIndex: 100,
				}}
			>
				Popular Editor
			</Text>
			<FlatList
				contentContainerStyle={{
					gap: 10,
					paddingVertical: 10,
				}}
				data={myData}
				horizontal
				bounces={false}
				pagingEnabled
				decelerationRate={0}
				showsHorizontalScrollIndicator={false}
				renderItem={({ item }) => {
					return (
						<View
							style={{
								gap: 2,
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<View
								style={{
									width: 100,
									height: 100,
									borderRadius: 75,
									backgroundColor: "red",
								}}
							/>
							<Text>Itr. Bidhan Bhandari</Text>
						</View>
					);
				}}
			/>
		</View>
	);
};

import { useNavigation, type NavigationProp } from "@react-navigation/native";

const Blogs = () => {
	const { width } = useWindowDimensions("width");
	const cardWidth = width * 0.9;

	const navigation = useNavigation();

	return (
		<Screen>
			<View style={{ padding: 10, gap: 20, alignContent: "center" }}>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-around",
					}}
				>
					<AntDesign
						name="back"
						size={24}
						color="black"
						onPress={() => {
							navigation.goBack();
						}}
					/>
					<Text
						style={{
							fontSize: 20,
							fontWeight: "500",
							flex: 5,
							textAlign: "center",
						}}
					>
						Blogs
					</Text>
					<AntDesign
						name="search1"
						size={24}
						color="black"
						onPress={() => {
							navigation.goBack();
						}}
					/>
				</View>

				<View style={{ alignItems: "center" }}>
					<FlatList
						nestedScrollEnabled={true}
						data={myData}
						bounces={false}
						decelerationRate={0}
						showsVerticalScrollIndicator={false}
						contentContainerStyle={{
							gap: 20,
							paddingHorizontal: 5,
						}}
						ListHeaderComponent={<HeaderComponent />}
						renderItem={({ item }) => {
							return (
								<Card
									style={{
										backgroundColor: "white",
										borderTopEndRadius: 40,
										borderTopLeftRadius: 40,
										borderBottomLeftRadius: 20,
										borderBottomEndRadius: 20,
										width: cardWidth,
										gap: 10,
										alignItems: "center",
										elevation: 200,
									}}
								>
									<View
										style={{
											width: "100%",
											height: 200,
											backgroundColor: "red",
											borderRadius: 20,
										}}
									></View>
									<Text
										style={{
											fontSize: 20,
											fontWeight: "900",
											width: "100%",
										}}
									>
										{item.title}
									</Text>
									<Pressable
										style={{
											width: 100,
											paddingVertical: 10,
											paddingHorizontal: 5,
											backgroundColor: "blue",
											borderRadius: 20,
										}}
									>
										<Text style={{ textAlign: "center", color: "white" }}>
											Read More
										</Text>
									</Pressable>
									<View
										style={{
											flexDirection: "row",
											justifyContent: "space-between",
											width: "100%",
										}}
									>
										<View style={{ flexDirection: "row" }}>
											{displayRatings(item.rating).map((star) => star)}
										</View>
										<View>
											<FontAwesome name="bookmark" size={24} color="black" />
										</View>
									</View>
								</Card>
							);
						}}
					/>
				</View>
			</View>
		</Screen>
	);
};

export default Blogs;
