import { useEffect } from "react";

import Categories from "components/LandingPage/Categories";
import Testimonies from "components/LandingPage/Testimonies";
import Footer from "components/Layout/Footer";
import Header from "components/Layout/Header";
import BookingForm from "components/PropertyPage/BookingForm";
import PropertyDescription from "components/PropertyPage/Description";
import FeaturedImages from "components/PropertyPage/FeaturedImages";
import PropertyTitle from "components/PropertyPage/Title";
import { useLocation } from "react-router-dom";

import ITEM_DETAILS from "../../json/itemDetails.json";

const DetailsPage = () => {
	const location = useLocation();

	const breadcrumb = [
		{ pageTitle: "Home", pageHref: "/" },
		{ pageTitle: ITEM_DETAILS?.name, pageHref: "" },
	];

	useEffect(() => {
		document.title = `Staycation | ${ITEM_DETAILS?.name}`;
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Header location={location} />
			<PropertyTitle breadcrumb={breadcrumb} data={ITEM_DETAILS} />
			<FeaturedImages data={ITEM_DETAILS} />
			<main className="w-full flex flex-col lg:flex-row px-6 xl:px-36 gap-10 md:gap-[53px] pt-[50px] md:pt-[50px] lg:px-10">
				<PropertyDescription data={ITEM_DETAILS} />
				<BookingForm itemDetails={ITEM_DETAILS} />
			</main>
			<Categories categories={ITEM_DETAILS.categories} />
			<Testimonies testimonial={ITEM_DETAILS.testimonial} />
			<Footer />
		</>
	);
};

export default DetailsPage;
