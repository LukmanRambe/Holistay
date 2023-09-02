import { useRef } from "react";

import Testimonies from "components/Artifacts/Testimonies";
import Categories from "components/LandingPage/Categories";
import Hero from "components/LandingPage/Hero";
import MostPicked from "components/LandingPage/MostPicked";
import Layout from "components/Layout";
import { useLocation } from "react-router-dom";

import LANDING_PAGE from "../json/landingPage.json";

const LandingPage = () => {
	const location = useLocation();
	const refMostPicked = useRef();

	return (
		<Layout location={location} pageTitle="Holistay">
			<Hero refMostPicked={refMostPicked} data={LANDING_PAGE.hero} />
			<MostPicked
				refMostPicked={refMostPicked}
				mostPicked={LANDING_PAGE.mostPicked}
			/>
			<Categories categories={LANDING_PAGE.categories} />
			<Testimonies testimonial={LANDING_PAGE.testimonial} />
		</Layout>
	);
};

export default LandingPage;
