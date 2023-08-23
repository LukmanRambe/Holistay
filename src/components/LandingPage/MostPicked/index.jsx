import { useId } from "react";

import Button from "components/Artifacts/Button";

const MostPicked = ({ refMostPicked, mostPicked }) => {
	const houseId = useId();

	return (
		<section
			ref={refMostPicked}
			className="w-full px-6 xl:px-36 pt-[50px] md:pt-[100px] lg:px-10">
			<h4 className="mb-4 text-[24px] leading-normal font-medium -text--primary-dark">
				Most Picked
			</h4>

			<section className="grid sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-[30%_minmax(20%,_1fr)_minmax(20%,_1fr)] lg:grid-rows-[repeat(2,_minmax(215px,_1fr))] gap-[30px]">
				{mostPicked.map((house, index) => (
					<article
						key={`most-picked-${houseId}-${index}`}
						className="card group">
						<div className="absolute top-0 right-0 text-white min-h-[30px] rounded-se-[15px] rounded-es-[15px] z-10 p-1 px-5 text-sm -bg--pink">
							${house.price}
							<span className="font-light"> per {house.unit}</span>
						</div>

						<figure className="w-full h-full mb-0 rounded-[0.9375rem] group-hover:cursor-pointer group-hover:duration-[.5s] group-hover:ease-in-out group-hover:scale-100 scale-110">
							<img
								src={house.imageUrl}
								alt={house.name}
								className="object-cover w-full h-full"
							/>
						</figure>

						<Button
							type="link"
							className="absolute bottom-0 w-full h-full bg-gradient-to-b from-black/0 to-black/50"
							href={`/properties/${house._id}`}>
							<span className="absolute bottom-0 p-6 text-white">
								<h5 className="text-lg mb-[2px]">{house.name}</h5>
								<span className="text-sm font-light">
									{house.city}, {house.country}
								</span>
							</span>
						</Button>
					</article>
				))}
			</section>
		</section>
	);
};

export default MostPicked;
