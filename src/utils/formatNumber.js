const formatNumber = (number) => {
	const numberFormat = new Intl.NumberFormat("id-ID");

	return numberFormat.format(number);
};

export default formatNumber;
