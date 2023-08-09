import propTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = (props) => {
	const className = [props.className];
	if (props.isPrimary)
		className.push("-bg--primary text-white xl:text-lg rounded-md");
	if (props.isLarge) className.push("btn-lg");
	if (props.isSmall) className.push("btn-sm");
	if (props.isBlock) className.push("btn-block");
	if (props.hasShadow)
		className.push("shadow-[0_8px_15px_0_rgba(43,76,222,0.3)]");

	const handleClick = () => {
		if (props.onClick) props.onClick();
	};

	if (props.isDisabled || props.isLoading) {
		if (props.isDisabled) className.push("disabled");

		return (
			<span className={className.join(" ")}>
				{props.isLoading ? (
					<>
						<span className="mx-5 spinner-border spinner-border-sm"></span>
						<span className="sr-only">Loading...</span>
					</>
				) : (
					props.children
				)}
			</span>
		);
	}

	if (props.type === "link") {
		if (props.isExternal) {
			return (
				<a
					href={props.href}
					className={className.join(" ")}
					target={props.target === "_blank" ? "_blank" : undefined}
					rel={props.target === "_blank" ? "noopener noreferrer" : undefined}>
					{props.children}
				</a>
			);
		}

		if (!props.isExternal) {
			return (
				<Link
					to={props.href}
					className={className.join(" ")}
					onClick={handleClick}>
					{props.children}
				</Link>
			);
		}
	}

	return (
		<button className={className.join(" ")} onClick={handleClick}>
			{props.children}
		</button>
	);
};

Button.propTypes = {
	type: propTypes.oneOf(["button", "link"]),
	onClick: propTypes.func,
	href: propTypes.string,
	target: propTypes.string,
	className: propTypes.string,
	isPrimary: propTypes.bool,
	isLarge: propTypes.bool,
	isSmall: propTypes.bool,
	isDisabled: propTypes.bool,
	isLoading: propTypes.bool,
	isBlock: propTypes.bool,
	isExternal: propTypes.bool,
	hasShadow: propTypes.bool,
};

export default Button;
