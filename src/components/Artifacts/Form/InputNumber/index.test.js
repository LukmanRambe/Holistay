import React, { useState } from "react";

import { render, fireEvent } from "@testing-library/react";

import InputNumber from ".";

const TestInput = () => {
	const [inputValue, setInputValue] = useState({ value: "" });

	const handleChange = (e) => {
		setInputValue({ [e.target.name]: e.target.value });
	};

	return (
		<InputNumber
			max={30}
			onChange={handleChange}
			name="value"
			value={inputValue.value}
		/>
	);
};

const setup = () => {
	const { container } = render(<TestInput />);
	const input = container.querySelector(`input.input-number[name='value']`);

	return { input };
};

describe("Input value changes", () => {
	it("should be able to change value", () => {
		const { input } = setup();

		fireEvent.change(input, { target: { value: 23 } });
		expect(input.value).toBe("23");
	});

	it("should not be able to change value when it reaches max value", () => {
		const { input } = setup();

		fireEvent.change(input, { target: { value: 33 } });
		expect(input.value).toBe("");
	});
});
