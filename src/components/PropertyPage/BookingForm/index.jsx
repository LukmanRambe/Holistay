import { useEffect, useState } from "react";

import Button from "components/Artifacts/Button";
import InputDate from "components/Artifacts/Form/InputDate";
import InputNumber from "components/Artifacts/Form/InputNumber";
import propTypes from "prop-types";
import { Fade } from "react-reveal";

const BookingForm = ({ itemDetails }) => {
	const [inputValue, setInputValue] = useState({
		data: {
			duration: 1,
			date: {
				startDate: new Date(),
				endDate: new Date(),
				key: "selection",
			},
		},
	});

	const updateData = (event) => {
		setInputValue((prevState) => {
			return {
				...prevState,
				data: {
					...prevState.data,
					[event.target.name]: event.target.value,
				},
			};
		});
	};

	useEffect(() => {
		setInputValue((prevState) => {
			const startDate = new Date(inputValue.data.date.startDate);
			const endDate = new Date(
				startDate.setDate(startDate.getDate() + +inputValue.data.duration - 1)
			);

			return {
				...prevState,
				data: {
					...prevState.data,
					date: {
						...prevState.data.date,
						endDate: endDate,
					},
				},
			};
		});
	}, [inputValue.data.duration]);

	useEffect(() => {
		setInputValue((prevState) => {
			const startDate = new Date(inputValue.data.date.startDate);
			const endDate = new Date(inputValue.data.date.endDate);
			const countDuration = new Date(endDate - startDate).getDate();

			return {
				data: {
					...prevState.data,
					duration: countDuration,
				},
			};
		});
	}, [inputValue.data.date]);

	return (
		<Fade bottom>
			<section className="w-full lg:w-[40%] card overflow-visible border py-[50px] xl:py-[60px] px-5 md:px-10 xl:px-14">
				<h4 className="mb-[14px] font-medium -text--primary-dark text-xl">
					Start Booking
				</h4>

				<h5 className="text-2xl md:text-4xl font-medium -text--teal mb-[14px]">
					${itemDetails.price}{" "}
					<span className="font-extralight -text--gray">
						per {itemDetails.unit}
					</span>
				</h5>

				<div className="flex flex-col gap-2 mb-6">
					<label htmlFor="duration" className="-text--primary-dark">
						How long you will stay?
					</label>

					<InputNumber
						max={30}
						suffix=" night"
						onChange={updateData}
						name="duration"
						value={inputValue.data.duration}
					/>
				</div>

				<div className="mb-[14px] flex flex-col gap-2">
					<label htmlFor="date" className="-text--primary-dark">
						Pick a date
					</label>

					<InputDate
						onChange={updateData}
						name="date"
						value={inputValue.data.date}
					/>
				</div>

				<h6 className="mb-10 text-sm font-light sm:text-base -text--gray">
					You will pay{" "}
					<span className="font-medium -text--primary-dark">
						${itemDetails.price * inputValue.data.duration} USD{" "}
					</span>
					<span>per </span>
					<span className="font-medium -text--primary-dark">
						{inputValue.data.duration} {itemDetails.unit}
					</span>
				</h6>

				<Button className="w-full" hasShadow isPrimary>
					Continue To Book
				</Button>
			</section>
		</Fade>
	);
};

BookingForm.propTypes = {
	itemDetails: propTypes.object,
	startBooking: propTypes.func,
};

export default BookingForm;
