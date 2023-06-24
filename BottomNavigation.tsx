import {
	View,
	StyleSheet,
	TouchableOpacity,
	StyleProp,
	ViewStyle,
} from "react-native";
import {
	useNavigationBuilder,
	TabRouter,
	createNavigatorFactory,
} from "@react-navigation/native";

import {
	DefaultNavigatorOptions,
	ParamListBase,
	TabActions,
	TabNavigationState,
	TabRouterOptions,
} from "@react-navigation/native";

type Props = DefaultNavigatorOptions<
	ParamListBase,
	TabNavigationState<ParamListBase>,
	TabNavigationOptions,
	TabNavigationEventMap
> &
	TabRouterOptions &
	TabNavigationConfig;

type TabNavigationOptions = {
	title?: string;
	type: string;
	style?: {};
	renderChild: Function;
	notshowBottomNavigation?: Boolean;
};
type TabNavigationEventMap = {
	tabPress: {
		data: { isAlreadyFocused: boolean };
		canPreventDefault: true;
	};
};
type TabNavigationConfig = {
	tabBarStyle: StyleProp<ViewStyle>;
	contentStyle?: StyleProp<ViewStyle>;
};

function HomeNavigator({
	initialRouteName,
	children,
	screenOptions,
	tabBarStyle,
	contentStyle,
}: Props) {
	const { state, navigation, descriptors, NavigationContent } =
		useNavigationBuilder(TabRouter, {
			children,
			screenOptions,
			initialRouteName,
		});
	return (
		<NavigationContent>
			<View style={[{ flex: 1 }, contentStyle]}>
				{state.routes.map((route, i) => {
					return (
						<View
							key={route.key}
							style={[
								StyleSheet.absoluteFill,
								{ display: i === state.index ? "flex" : "none" },
							]}
						>
							{descriptors[route.key].render()}
						</View>
					);
				})}
			</View>
			<View style={[tabBarStyle]}>
				{state.routes.map((route) => {
					return (
						<TouchableOpacity
							key={route.key}
							style={
								descriptors[route.key].options.style
									? { ...descriptors[route.key].options.style }
									: {}
							}
							onPress={() => {
								const event = navigation.emit({
									type: "tabPress",
									target: route.key,
									canPreventDefault: true,
								});
								if ("defaultPrevented" in event) {
									if (!event.defaultPrevented) {
										navigation.dispatch({
											...TabActions.jumpTo(route.name),
											target: state.key,
										});
									}
								}
							}}
						>
							{descriptors[route.key].options.renderChild()}
						</TouchableOpacity>
					);
				})}
			</View>
		</NavigationContent>
	);
}
export const createMyNavigator = createNavigatorFactory<
	TabNavigationState<ParamListBase>,
	TabNavigationOptions,
	TabNavigationEventMap,
	typeof HomeNavigator
>(HomeNavigator);
