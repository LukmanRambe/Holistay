import IconCities from "assets/icons/icon-cities.svg";
import IconTravelers from "assets/icons/icon-travelers.svg";
import IconTreasures from "assets/icons/icon-treasures.svg";
import ImageHeroFrame from "assets/images/img-hero-frame.jpg";
import ImageHero from "assets/images/img-hero.jpg";
import Button from "components/Artifacts/Button";
import { Fade } from "react-reveal";
import formatNumber from "utils/formatNumber";

const Hero = ({ refMostPicked, data }) => {
	const showMostPicked = () => {
		window.scrollTo({
			top: refMostPicked.current.offsetTop + 40,
			behavior: "smooth",
		});
	};

	return (
		<section className="w-full pt-[50px] md:pt-[70px]">
			<section className="flex items-start justify-between">
				<Fade bottom>
					<article className="sm:w-[500px] w-full flex flex-col sm:justify-between">
						<article className="mb-[70px] lg:mb-24 text-center sm:text-start">
							<h1 className="mb-5 text-[38px] xl:text-[42px] leading-[63px] font-bold -text--primary-dark">
								Forget Busy Work, <br /> Start Next Vacation
							</h1>

							<p className="w-full mb-8 font-light sm:w-3/4 -text--gray">
								We provide what you need to enjoy your vacation with family.
								Time to make another memorable moments.
							</p>

							<Button
								className="md:max-w-[210px]"
								hasShadow
								isPrimary
								onClick={showMostPicked}>
								Show Me Now
							</Button>
						</article>

						<article className="w-full flex gap-6 sm:gap-8 xl:gap-[50px]">
							<div className="w-full">
								<img
									width="36"
									height="36"
									className="w-8 h-8 xl:w-9 xl:h-9"
									src={IconTravelers}
									alt={`${formatNumber(data.travelers)} Travelers`}
								/>
								<h3 className="font-medium mt-[10px] flex flex-col sm:flex-row gap-0 sm:gap-1">
									{formatNumber(data.travelers)}{" "}
									<span className="font-light -text--gray">Travelers</span>
								</h3>
							</div>
							<div className="w-full">
								<img
									width="36"
									height="36"
									className="w-8 h-8 xl:w-9 xl:h-9"
									src={IconTreasures}
									alt={`${formatNumber(data.treasures)} Treasures`}
								/>
								<h3 className="font-medium mt-[10px] flex flex-col sm:flex-row gap-0 sm:gap-1">
									{formatNumber(data.treasures)}{" "}
									<span className="font-light -text--gray">Treasures</span>
								</h3>
							</div>
							<div className="w-full">
								<img
									width="36"
									height="36"
									className="w-8 h-8 xl:w-9 xl:h-9"
									src={IconCities}
									alt={`${formatNumber(data.cities)} Cities`}
								/>
								<h3 className="font-medium mt-[10px] flex flex-col sm:flex-row gap-0 sm:gap-1">
									{formatNumber(data.cities)}{" "}
									<span className="font-light -text--gray">Cities</span>
								</h3>
							</div>
						</article>
					</article>
				</Fade>

				<Fade bottom>
					<article className="hidden lg:block min-w-[400px] lg:min-w-[470px] 2xl:min-w-[540px] h-fit">
						<div className="relative pt-[60px] 2xl:pt-[40px]">
							<img
								src={ImageHero}
								alt="Home with balcony"
								className="absolute -mt-[30px] lg:mr-[30px] z-[1] right-0"
							/>

							<img
								src={ImageHeroFrame}
								alt="Home with balcony frame"
								className="absolute mt-[5px] right-0"
							/>
						</div>
					</article>
				</Fade>
			</section>
		</section>
	);
};

export default Hero;
