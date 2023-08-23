import { render } from "@testing-library/react";

import Star from ".";

describe("star props", () => {
	it("should have value, height, width, and spacing props", () => {
		const height = 35;
		const width = 35;
		const spacing = 4;
		const { container } = render(
			<Star value={3.5} height={height} width={width} spacing={spacing} />
		);
		const star = "div.stars span.star";

		// Stars Container
		expect(container.querySelector("div.stars")).toBeInTheDocument();
		expect(container.querySelector("div.stars")).toHaveAttribute(
			"style",
			expect.stringContaining(`height: ${height}px`)
		);

		// Stars
		expect(container.querySelector(star)).toHaveAttribute(
			"style",
			expect.stringContaining(`height: ${height}px`)
		);
		expect(container.querySelector(star)).toHaveAttribute(
			"style",
			expect.stringContaining(`width: ${width}px`)
		);
		expect(container.querySelector(star)).toHaveAttribute(
			"style",
			expect.stringContaining(`margin-right: ${spacing}px`)
		);
	});
});

describe("star color", () => {
	const height = 35;
	const width = 35;
	const spacing = 4;

	it("should have yellow color", () => {
		const { container } = render(
			<Star value={3.5} height={height} width={width} spacing={spacing} />
		);
		const filledStar = "div.stars span.star.star-filled";

		expect(container.querySelector(filledStar)).toHaveAttribute(
			"class",
			expect.stringContaining(`-bg--yellow`)
		);
	});

	it("should have light gray color", () => {
		const { container } = render(
			<Star value={3.5} height={height} width={width} spacing={spacing} />
		);
		const placeholderStar = "div.stars span.star.star-placeholder";

		expect(container.querySelector(placeholderStar)).toHaveAttribute(
			"class",
			expect.stringContaining(`-bg--light-gray`)
		);
	});
});
