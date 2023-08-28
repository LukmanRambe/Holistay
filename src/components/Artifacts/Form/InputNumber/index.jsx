import propTypes from "prop-types";

const InputNumber = ({
	value,
	placeholder,
	name,
	min,
	max,
	prefix,
	suffix,
	onChange,
	outerClassName,
}) => {
	const handleChange = (e) => {
		const newValue = String(e.target.value);

		if (+newValue <= max && +newValue >= min) {
			onChange({
				target: {
					name: name,
					value: +newValue,
				},
			});
		}
	};

	const add = () =>
		value < max &&
		handleChange({
			target: {
				name: name,
				value: +value + 1,
			},
		});

	const subtract = () =>
		value > min &&
		handleChange({
			target: {
				name: name,
				value: +value - 1,
			},
		});

	return (
		<div className={["mb-3", outerClassName].join(" ")}>
			<div className="flex items-center bg-white">
				<div className="input-group-prepend">
					<span
						className="border-0 hover:cursor-pointer text-white p-0 rounded-[4px] text-2xl w-[45px] h-[45px] select-none -bg--red flex justify-center items-center"
						onClick={subtract}>
						{" "}
						-{" "}
					</span>
				</div>

				<input
					readOnly
					aria-label="date-input"
					min={min}
					max={max}
					name={name}
					pattern="[0-9]*"
					placeholder={placeholder || "0"}
					value={
						value !== ""
							? `${prefix}${value}${
									suffix && +value > 1 ? `${suffix}s` : suffix
							  }`
							: ""
					}
					onChange={handleChange}
					className="input-number min-h-[45px] border-0 rounded-none shadow-none outline-none -bg--gray-100 py-[.575rem] px-[1rem] text-center"
				/>

				<div className="input-group-prepend">
					<span
						className="border-0 hover:cursor-pointer text-white p-0 rounded-[4px] text-2xl w-[45px] h-[45px] select-none -bg--teal flex justify-center items-center"
						onClick={add}>
						{" "}
						+{" "}
					</span>
				</div>
			</div>
		</div>
	);
};

InputNumber.defaultProps = {
	min: 1,
	max: 1,
	prefix: "",
	suffix: "",
};

InputNumber.propTypes = {
	value: propTypes.oneOfType([propTypes.string, propTypes.number]),
	min: propTypes.number,
	max: propTypes.number,
	name: propTypes.string,
	placeholder: propTypes.string,
	prefix: propTypes.string,
	suffix: propTypes.string,
	onChange: propTypes.func,
	outerClassName: propTypes.string,
};

export default InputNumber;
