import PropertyPage from "pages/properties/[id].jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/index.jsx";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/properties/:id" element={<PropertyPage />} />
			</Routes>
		</Router>
	);
};

export default App;
