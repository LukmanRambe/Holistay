import HTMLReactParser from "html-react-parser";
import { Fade } from "react-reveal";

const PropertyDescription = ({ data }) => {
	return (
		<section className="w-full lg:w-[60%]">
			<Fade bottom>
				<h4 className="mb-[10px] font-medium text-xl -text--primary-dark">
					About the place
				</h4>

				<article className="text-base font-light -text--gray flex flex-col gap-[10px]">
					{HTMLReactParser(data?.description)}
				</article>

				<div className="mt-[30px] grid grid-cols-[repeat(2,_1fr)] md:grid-cols-[repeat(4,_1fr)] grid-rows-auto gap-[10px] gap-y-5">
					{data?.features?.map((feature, index) => (
						<article key={`feature-${index}`} className="flex-[1_1_120px] mb-5">
							<img
								width={40}
								height={40}
								src={feature.imageUrl}
								alt={feature.name}
								className="mb-2"
							/>

							<span className="font-medium -text--primary-dark">
								{feature.qty}{" "}
								<span className="font-light capitalize -text--gray">
									{feature.name}
								</span>
							</span>
						</article>
					))}
				</div>
			</Fade>
		</section>
	);
};

export default PropertyDescription;
