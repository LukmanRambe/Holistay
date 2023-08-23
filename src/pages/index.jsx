import { useRef } from "react";

import Categories from "components/LandingPage/Categories";
import Hero from "components/LandingPage/Hero";
import MostPicked from "components/LandingPage/MostPicked";
import Testimonies from "components/LandingPage/Testimonies";
import Footer from "components/Main/Footer";
import { useLocation } from "react-router-dom";

import Header from "../components/Main/Header";
import LANDING_PAGE from "../json/landingPage.json";

const LandingPage = () => {
	const location = useLocation();
	const refMostPicked = useRef();

	return (
		<>
			<Header location={location}></Header>
			<Hero refMostPicked={refMostPicked} data={LANDING_PAGE.hero} />
			<MostPicked
				refMostPicked={refMostPicked}
				mostPicked={LANDING_PAGE.mostPicked}
			/>
			<Categories categories={LANDING_PAGE.categories} />
			<Testimonies testimonial={LANDING_PAGE.testimonial} />
			<Footer />
		</>
	);
};

export default LandingPage;
