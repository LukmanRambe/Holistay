import Hero from "components/LandingPage/Hero";
import { useLocation } from "react-router-dom";

import Header from "../components/Main/Header";
import LANDING_PAGE from "../json/landingPage.json";

const LandingPage = () => {
	const location = useLocation();

	return (
		<>
			<Header location={location}></Header>
			<Hero data={LANDING_PAGE.hero} />
		</>
	);
};

export default LandingPage;
