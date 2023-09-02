import { Fade } from "react-reveal";

const FeaturedImages = ({ data }) => {
	return (
		<section className="w-full px-6 xl:px-36 pt-4 lg:pt-[50px] lg:px-10">
			<div className="grid md:grid-cols-[60%_minmax(40%,_1fr)] lg:grid-rows-[repeat(2,_245px)] gap-[10px]">
				{data?.imageUrls?.map((item, index) => (
					<Fade key={`featured-image-${index}`} bottom delay={250 * index}>
						<article className="card first-of-type:row-span-2">
							<figure className="w-full h-full">
								<img
									src={item?.url}
									alt={`image-${index + 1}`}
									className="object-cover w-full h-full"
								/>
							</figure>
						</article>
					</Fade>
				))}
			</div>
		</section>
	);
};

export default FeaturedImages;
