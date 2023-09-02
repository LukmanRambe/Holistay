import ImageTestimonialFrame from "assets/images/testimonial/img-testimonial-frame.jpg";
import Button from "components/Artifacts/Button";
import Star from "components/Artifacts/Star";
import { Fade } from "react-reveal";

const Testimonies = ({ testimonial }) => {
	return (
		<section className="w-full h-full pb-28 pt-[50px] md:pt-[100px]">
			<div className="w-full h-full flex justfiy-center flex-col sm:flex-row sm:gap-[80px] md:gap-[60px] lg:gap-[75px]">
				<Fade bottom>
					<article className="hidden sm:block relative w-full sm:w-1/3 md:w-1/2 lg:w-2/5 min-h-[470px] md:min-h-[500px] lg:min-h-[590px] lg:min-w-[400px]">
						<img
							src={ImageTestimonialFrame}
							alt="Testimonial Image Frame"
							className="absolute max-h-[540px]"
						/>

						<img
							src={testimonial.imageUrl}
							alt="Testimonial Image"
							className="absolute sm:mt-[25px] sm:ml-[20px] lg:mt-[50px] lg:ml-[40px] max-h-[540px]"
						/>
					</article>

					<article className="self-center w-full sm:w-2/3 md:w-1/2 lg:w-3/5">
						<h4 className="mb-5 text-lg font-medium lg:mb-10 xl:text-2xl -text--primary-dark">
							{testimonial.name}
						</h4>

						<div className="w-full overflow-hidden rounded-[15px] mb-5 sm:hidden h-72">
							<img
								src={testimonial.imageUrl}
								alt="Testimonial Image"
								className="object-cover w-full h-full scale-125"
							/>
						</div>

						<div className="flex flex-col gap-2">
							<Star
								value={testimonial.rate}
								height={35}
								width={35}
								spacing={4}
							/>

							<p className="text-[23px] xl:text-[32px] -text--primary-dark w-full lg:max-w-[600px]">
								{testimonial.content}
							</p>

							<span className="text-sm xl:text-[18px] font-light -text--gray">
								{testimonial.familyName}, {testimonial.familyOccupation}
							</span>
						</div>

						<Button
							className="py-3 mt-10 text-center"
							hasShadow
							isPrimary
							isBlock
							type="link"
							href={`/testimonial/${testimonial._id}`}>
							Read Their Story
						</Button>
					</article>
				</Fade>
			</div>
		</section>
	);
};

export default Testimonies;
