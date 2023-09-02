import propTypes from "prop-types";

import Button from "../Button";

const Breadcrumb = ({ data }) => {
	return (
		<nav aria-label="breadcrumb">
			<ol className="flex gap-4 breadcrumb">
				{data?.map((item, index) => (
					<li
						key={`breadcrumb-${index}`}
						className={`[&:not(:last-of-type)]:after:content-['/'] [&:not(:last-of-type)]:after:ml-4 ${
							index === data.length - 1
								? "font-medium -text--primary-dark"
								: "font-light -text--gray"
						}`}>
						{index === data.length - 1 ? (
							<span className="text-lg">{item.pageTitle}</span>
						) : (
							<Button type="link" href={item.pageHref} className="text-lg">
								{item.pageTitle}
							</Button>
						)}
					</li>
				))}
			</ol>
		</nav>
	);
};

Breadcrumb.propTypes = {
	data: propTypes.array,
	className: propTypes.string,
};

export default Breadcrumb;
