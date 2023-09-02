import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ location, children }) => {
	return (
		<>
			<Header location={location} />
			<div className="px-6 xl:px-36 lg:px-10">{children}</div>
			<Footer />
		</>
	);
};

export default Layout;
