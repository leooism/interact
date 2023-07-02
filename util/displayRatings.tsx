import { AntDesign, FontAwesome } from "@expo/vector-icons";

export default function displayRatings(ratingNumber) {
	const stars = [];
	let filledStars = Math.floor(ratingNumber);
	for (let i = 0; i < filledStars; i++) {
		stars.push(<AntDesign name="star" size={24} color="black" />);
	}
	if (ratingNumber - filledStars > 0) {
		stars.push(<FontAwesome name="star-half-full" size={24} color="black" />);
	}
	return stars;
}
