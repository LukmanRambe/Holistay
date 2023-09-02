import Testimonies from "components/Artifacts/Testimonies";
import Categories from "components/LandingPage/Categories";
import Layout from "components/Layout";
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

	return (
		<Layout location={location} pageTitle={`Holistay | ${ITEM_DETAILS?.name}`}>
			<PropertyTitle breadcrumb={breadcrumb} data={ITEM_DETAILS} />
			<FeaturedImages data={ITEM_DETAILS} />
			<main className="w-full flex flex-col lg:flex-row gap-10 md:gap-[53px] pt-[50px] md:pt-[50px]">
				<PropertyDescription data={ITEM_DETAILS} />
				<BookingForm itemDetails={ITEM_DETAILS} />
			</main>
			<Categories categories={ITEM_DETAILS.categories} />
			<Testimonies testimonial={ITEM_DETAILS.testimonial} />
		</Layout>
	);
};

export default DetailsPage;
