import { useEffect } from "react";

import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ location, children, pageTitle }) => {
	useEffect(() => {
		document.title = pageTitle;
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Header location={location} />
			<div className="px-6 xl:px-36 lg:px-10">{children}</div>
			<Footer />
		</>
	);
};

export default Layout;
