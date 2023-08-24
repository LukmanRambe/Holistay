import Button from "components/Artifacts/Button";
import { Fade } from "react-reveal";

const Categories = ({ categories }) => {
	return (
		<section className="flex flex-col gap-y-[70px] w-full px-6 xl:px-36 pt-[50px] md:pt-[100px] lg:px-10">
			{categories.map((category, categoryIndex) => (
				<section key={`category-${categoryIndex}`}>
					<h4 className="mb-5 text-[24px] leading-normal font-medium -text--primary-dark">
						{category.name}
					</h4>

					<section className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-between gap-y-10 sm:gap-y-12 lg:gap-[30px] w-full">
						{category.items?.length <= 0 ? (
							<p className="text-center -text--primary-dark">
								There is no property in this category
							</p>
						) : (
							category.items?.map((item, itemIndex) => (
								<Fade
									key={`category-${categoryIndex}-item-${itemIndex}`}
									bottom
									delay={250 * itemIndex}>
									<article className="relative sm:basis-[47%] w-full h-full rounded-[15px] overflow-hidden group">
										{item.isPopular && (
											<div className="absolute top-0 right-0 text-white min-h-[30px] rounded-se-[15px] rounded-es-[15px] z-10 p-1 px-5 text-sm -bg--pink">
												Popular
												<span className="font-light"> Choice</span>
											</div>
										)}

										<figure className="w-full h-full group-hover:cursor-pointer overflow-hidden rounded-[15px] group-hover:duration-[.5s] group-hover:ease-in-out group-hover:scale-100 mb-[15px]">
											<img
												src={item.imageUrl}
												alt={item.name}
												className="object-cover w-full h-full group-hover:cursor-pointer scale-110 group-hover:duration-[.5s] group-hover:ease-in-out group-hover:scale-100"
											/>
										</figure>

										<Button
											type="link"
											className="after:absolute after:left-0 after:bottom-0 after:w-full after:h-full"
											href={`/properties/${item._id}`}>
											<span>
												<h5 className="text-lg -text--primary-dark group-hover:underline group-hover:duration-[.5s] group-hover:ease-in-out">
													{item.name}
												</h5>
												<span className="text-sm font-light -text--gray">
													{item.city}, {item.country}
												</span>
											</span>
										</Button>
									</article>
								</Fade>
							))
						)}
					</section>
				</section>
			))}
		</section>
	);
};

export default Categories;
