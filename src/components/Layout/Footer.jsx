import Button from "components/Artifacts/Button";
import IconText from "components/Artifacts/IconText";

const Footer = () => {
	return (
		<footer className="flex items-center flex-col justify-between w-full py-12 bg-white border-t-[1.5px] gap-[60px] px-6 xl:px-36 lg:px-10">
			<section className="flex flex-col w-full lg:flex-row">
				<div className="w-full sm:w-2/5 place-self-start">
					<IconText />

					<p className="mt-2 max-w-[260px] font-light text-base -text--gray">
						We kaboom your beauty holiday instantly and memorable
					</p>
				</div>

				<div className="flex flex-col items-start justify-between w-full gap-10 mt-16 lg:gap-8 lg:w-3/5 sm:items-center sm:flex-row lg:mt-0">
					<article>
						<h4 className="text-lg font-medium -text--primary-dark">
							For Beginners
						</h4>

						<ul className="flex flex-col mt-[18px] font-light -text--gray gap-[6px]">
							<li>
								<Button
									className="transition-all duration-75 hover:underline"
									type="link"
									href="/sign-up">
									New Account
								</Button>
							</li>
							<li>
								<Button
									className="transition-all duration-75 hover:underline"
									type="link"
									href="/booking">
									Book a Room
								</Button>
							</li>
							<li>
								<Button
									className="transition-all duration-75 hover:underline"
									type="link"
									href="/payments">
									Use Payments
								</Button>
							</li>
						</ul>
					</article>

					<article>
						<h4 className="text-lg font-medium -text--primary-dark">
							Explore Us
						</h4>

						<ul className="flex flex-col mt-[18px] font-light -text--gray gap-[6px]">
							<li>
								<Button
									className="transition-all duration-75 hover:underline"
									type="link"
									href="/sign-up">
									Our Careers
								</Button>
							</li>
							<li>
								<Button
									className="transition-all duration-75 hover:underline"
									type="link"
									href="/booking">
									Privacy
								</Button>
							</li>
							<li>
								<Button
									className="transition-all duration-75 hover:underline"
									type="link"
									href="/payments">
									Terms & Conditions
								</Button>
							</li>
						</ul>
					</article>

					<article>
						<h4 className="text-lg font-medium -text--primary-dark">
							Connect Us
						</h4>

						<ul className="flex flex-col mt-[18px] font-light -text--gray gap-[6px]">
							<li>
								<Button
									className="transition-all duration-75 hover:underline"
									isExternal
									type="link"
									href="mailto:support@staycation.id">
									support@staycation.id
								</Button>
							</li>
							<li>
								<Button
									className="transition-all duration-75 hover:underline"
									isExternal
									type="link"
									href="tel:+622122081996">
									021 - 2208 - 1996
								</Button>
							</li>
							<li>
								<span>Staycation, Kemang, Jakarta</span>
							</li>
						</ul>
					</article>
				</div>
			</section>

			<div>
				<p className="text-base font-light text-center -text--gray">
					Copyright 2023 • All Rights Reserved • Staycation
				</p>
			</div>
		</footer>
	);
};

export default Footer;
