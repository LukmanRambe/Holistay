import { useState } from "react";

import Button from "components/Artifacts/Button";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { Fade } from "react-reveal";

import IconText from "../Artifacts/IconText/index.jsx";

const Header = (props) => {
	const [drawerOpen, setDrawerOpen] = useState(false);

	const getNavLinkClass = (path) => {
		return props.location.pathname === path ? " -text--primary" : "";
	};

	return (
		<header className="flex items-center justify-between w-full py-6 bg-white border-b-[1.5px] px-6 xl:px-36 lg:px-10">
			<Fade>
				<div className="container">
					<IconText />
				</div>

				{drawerOpen ? (
					<div className="absolute top-0 right-0 flex flex-col w-full h-full p-6 bg-white shadow-md lg:hidden md:w-96">
						<div className="flex items-center justify-between mb-7">
							<IconText />

							<button
								type="button"
								className="lg:hidden"
								onClick={() => setDrawerOpen(false)}>
								<span className="sr-only">Open drawer</span>
								<IoMdClose className="w-6 h-6 text-primary" />
							</button>
						</div>

						<ul className="flex flex-col gap-10 text-lg font-medium -text--primary-dark">
							<li className={`${getNavLinkClass("/")}`}>
								<Button
									type="link"
									className="tracking-wide hover:underline"
									href="/">
									Home
								</Button>
							</li>
							<li className={`${getNavLinkClass("/browse-by")}`}>
								<Button
									type="link"
									className="tracking-wide hover:underline"
									href="/browse-by">
									Browse By
								</Button>
							</li>
							<li className={`${getNavLinkClass("/stories")}`}>
								<Button
									type="link"
									className="tracking-wide hover:underline"
									href="/stories">
									Stories
								</Button>
							</li>
							<li className={`${getNavLinkClass("/agents")}`}>
								<Button
									type="link"
									className="tracking-wide hover:underline"
									href="/agents">
									Agents
								</Button>
							</li>
						</ul>
					</div>
				) : (
					<nav className="container justify-between hidden lg:flex">
						<ul className="container flex justify-end gap-10 text-lg font-medium -text--primary-dark">
							<li className={`${getNavLinkClass("/")}`}>
								<Button
									type="link"
									className="tracking-wide hover:underline"
									href="/">
									Home
								</Button>
							</li>
							<li className={`${getNavLinkClass("/browse-by")}`}>
								<Button
									type="link"
									className="tracking-wide hover:underline"
									href="/browse-by">
									Browse By
								</Button>
							</li>
							<li className={`${getNavLinkClass("/stories")}`}>
								<Button
									type="link"
									className="tracking-wide hover:underline"
									href="/stories">
									Stories
								</Button>
							</li>
							<li className={`${getNavLinkClass("/agents")}`}>
								<Button
									type="link"
									className="tracking-wide hover:underline"
									href="/agents">
									Agents
								</Button>
							</li>
						</ul>
					</nav>
				)}

				<button
					type="button"
					className="lg:hidden"
					onClick={() => setDrawerOpen(true)}>
					<span className="sr-only">Open drawer</span>
					<FiMenu className="w-6 h-6 text-primary" />
				</button>
			</Fade>
		</header>
	);
};

export default Header;
