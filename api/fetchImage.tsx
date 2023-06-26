const fetchImage = async (
	url: string,
	header: { method?: string; Authorization: string }
) => {
	const res = await fetch(url, { headers: { ...header } });
	const data = res.json();
	return data;
};

export default fetchImage;
