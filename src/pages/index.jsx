import { useLocation } from "react-router-dom";

import Header from "../components/Main/Header";

const LandingPage = () => {
	const location = useLocation();

	return (
		<>
			<Header location={location}></Header>
		</>
	);
};

export default LandingPage;
