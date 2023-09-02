import Breadcrumb from "components/Artifacts/Breadcrumb";
import { Fade } from "react-reveal";

const PropertyTitle = ({ data, breadcrumb }) => {
	return (
		<section className="gap-y-[70px] w-full pt-[50px] md:pt-[50px]">
			<Fade bottom>
				<div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-20 lg:items-center after:contents-[' '] after:flex-[1] after:xl:flex[0]">
					<div className="flex-1">
						<Breadcrumb data={breadcrumb} />
					</div>

					<div className="flex-1 text-center">
						<h1 className="mb-1 text-4xl font-semibold -text--primary-dark">
							{data?.name}
						</h1>
						<span className="text-lg font-light -text--gray">
							{data?.city}, {data?.country}
						</span>
					</div>
				</div>
			</Fade>
		</section>
	);
};

export default PropertyTitle;
