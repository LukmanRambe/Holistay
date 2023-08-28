import { useState } from "react";

import { screen, render, fireEvent } from "@testing-library/react";

import InputDate from ".";

const TestInput = () => {
	const [inputValue, setInputValue] = useState({
		value: {
			startDate: new Date(),
			endDate: new Date(),
			key: "selection",
		},
	});

	const handleChange = (event) => {
		setInputValue({ value: event.target.value });
	};

	return (
		<InputDate
			max={30}
			onChange={handleChange}
			name="value"
			value={inputValue}
		/>
	);
};

const setup = () => {
	const { container } = render(<TestInput />);
	const wrapper = container.querySelector(".date-picker-wrapper");
	const input = container.querySelector("input.input-date");

	return { container, wrapper, input };
};

describe("input date", () => {
	it("should have wrapper with className .wrapper", () => {
		const { wrapper } = setup();

		expect(wrapper).toBeInTheDocument();
	});

	it("should have tag <input> and has className .input-date", () => {
		const { input } = setup();

		expect(input).toBeInTheDocument();
	});

	it("should show date picker when input field clicked", () => {
		const { container, input } = setup();

		screen.debug();
		fireEvent.click(input, { button: 1 });
		const datePickerWrapper = container.querySelector(".date-picker-wrapper");
		screen.debug();

		expect(datePickerWrapper).toBeInTheDocument();
	});
});
