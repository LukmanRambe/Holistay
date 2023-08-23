import propTypes from "prop-types";

const Star = ({ value, height, width, spacing }) => {
	const decimals = Number(value) % 1;

	const stars = [];
	let leftPos = 0;

	for (let index = 0; index < 5 && index < value - decimals; index++) {
		leftPos += width;
		stars.push(
			<span
				key={index}
				className={`star star-filled z-[2] -bg--yellow`}
				style={{
					width: width,
					height: height,
					marginRight: spacing,
					left: index * width,
				}}
			/>
		);
	}

	if (decimals > 0 && value <= 5) {
		stars.push(
			<span
				key="starWithDecimals"
				className={`star star-filled z-[2] -bg--yellow`}
				style={{
					width: decimals * width - spacing,
					height: height,
					left: leftPos,
				}}
			/>
		);
	}

	const starsPlaceholder = [];

	for (let index = 0; index < 5; index++) {
		starsPlaceholder.push(
			<span
				key={`star-placeholder-${index}`}
				className={`star star-placeholder z-[1] -bg--light-gray`}
				style={{
					width: width,
					height: height,
					marginRight: spacing,
					left: index * width,
				}}
			/>
		);
	}

	return (
		<div
			className="stars relative min-w-[200px] inline-flex -z-[1]"
			style={{ height: height }}>
			{starsPlaceholder}
			{stars}
		</div>
	);
};

Star.propTypes = {
	value: propTypes.number,
	height: propTypes.number,
	width: propTypes.number,
	spacing: propTypes.number,
};

export default Star;
