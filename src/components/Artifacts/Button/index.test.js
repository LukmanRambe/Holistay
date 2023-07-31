import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Button from "./index.jsx";

describe("button State", () => {
	it("should not be able to be clicked if isDisabled is present", () => {
		const { container } = render(<Button isDisabled />);

		expect(container.querySelector("span.disabled")).toBeInTheDocument();
	});

	it("should render loading/spinner if isLoading is present", () => {
		const { container, getByText } = render(<Button isLoading />);

		expect(getByText(/loading/i)).toBeInTheDocument();
		expect(container.querySelector("span.spinner-border")).toBeInTheDocument();
	});

	it("should render <a> tag if isExternal is present", () => {
		const { container } = render(<Button type="link" isExternal />);

		expect(container.querySelector("a")).toBeInTheDocument();
	});

	it("should render <Link> component", () => {
		const { container } = render(
			<Router>
				<Button href="" type="link" />
			</Router>
		);

		expect(container.querySelector("a")).toBeInTheDocument();
	});
});
