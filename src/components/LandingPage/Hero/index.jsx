import IconCities from "assets/icons/icon-cities.svg";
import IconTravelers from "assets/icons/icon-travelers.svg";
import IconTreasures from "assets/icons/icon-treasures.svg";
import ImageHeroFrame from "assets/images/img-hero-frame.jpg";
import ImageHero from "assets/images/img-hero.jpg";
import Button from "components/Artifacts/Button";
import formatNumber from "utils/formatNumber";

const Hero = ({ refMostPicked, data }) => {
	const showMostPicked = () => {
		window.scrollTo({
			top: refMostPicked.current.offsetTop + 70,
			behavior: "smooth",
		});
	};

	return (
		<section className="w-full px-6 xl:px-36 pt-[50px] md:pt-[70px] lg:px-10">
			<section className="flex items-start justify-between">
				<article className="w-[500px] flex flex-col justify-between">
					<article className="mb-[70px] lg:mb-24">
						<h1 className="mb-5 text-[38px] xl:text-[42px] leading-[63px] font-bold -text--primary-dark">
							Forget Busy Work, <br /> Start Next Vacation
						</h1>

						<p className="w-3/4 mb-8 font-light -text--gray">
							We provide what you need to enjoy your vacation with family. Time
							to make another memorable moments.
						</p>

						<Button
							className="min-h-[50px] min-w-[240px]"
							hasShadow
							isPrimary
							onClick={showMostPicked}>
							Show Me Now
						</Button>
					</article>

					<article className="w-full flex flex-col md:flex-row gap-8 md:gap-[50px]">
						<div className="w-full">
							<img
								width="36"
								height="36"
								className="w-8 h-8 xl:w-9 xl:h-9"
								src={IconTravelers}
								alt={`${formatNumber(data.travelers)} Travelers`}
							/>
							<h3 className="font-medium mt-[10px]">
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
							<h3 className="font-medium mt-[10px]">
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
							<h3 className="font-medium mt-[10px]">
								{formatNumber(data.cities)}{" "}
								<span className="font-light -text--gray">Cities</span>
							</h3>
						</div>
					</article>
				</article>

				<article className="hidden lg:block w-[400px] lg:w-[430px] xl:w-[560px] h-fit">
					<div className="relative pt-[40px]">
						<img
							src={ImageHero}
							alt="Home with balcony"
							className="absolute m-0 -mt-[40px] -ml-[40px] z-[1]"
						/>

						<img
							src={ImageHeroFrame}
							alt="Home with balcony frame"
							className="absolute m-0 -mr-[15px] -mb-[15px]"
						/>
					</div>
				</article>
			</section>
		</section>
	);
};

export default Hero;
