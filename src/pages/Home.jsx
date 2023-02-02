import React from "react";
import Wave from "react-wavify";
import Header from "../components/Header";
import { TypeAnimation } from "react-type-animation";
import FileText from "../assets/file-text.svg";
// import { MapPin, AtSign } from "react-feather";
import { MdLocationPin } from "react-icons/md";
import { FiAtSign } from "react-icons/fi";
import { FaBeer } from "react-icons/fa";

function Home() {
	return (
		<>
			<section className="min-h-screen flex flex-col">
				<Header />

				<div className="container  flex flex-grow flex-col justify-center p-4 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
					<div className="flex flex-col justify-center lg:px-4 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
						<h1 className="text-4xl text-primary font-bold leading-none sm:text-6xl">
							Hi, I am Joshua
						</h1>
						<div className="my-6 text-base sm:mb-4">
							<TypeAnimation
								sequence={[
									"Fullstack Web Developer", // Types 'One'
									2000, // Waits 1s
									"Front-End Web Developer", // Deletes 'One' and types 'Two'
									2000, // Waits 2s
									"Back-End Web Developer",
									2000, // Types 'Three' without deleting 'Two'
									() => {
										console.log("Done typing!"); // Place optional callbacks anywhere in the array
									},
								]}
								wrapper="div"
								cursor={true}
								repeat={Infinity}
								style={{
									fontSize: "1.4em",
									lineHeight: "40px",
								}}
							/>
						</div>
						<p className="flex justify-center place-items-center gap-2 my-2 text-md lg:place-content-start sm:text-lg sm:mb-4">
							<MdLocationPin />
							Imus, Cavite
						</p>
						<p className="flex justify-center place-items-center gap-2 my-2 text-md lg:place-content-start sm:text-lg sm:mb-4">
							<FiAtSign />
							joshua.albert.villanueva@gmail.com
						</p>
					</div>
				</div>
			</section>
			<Wave mask="url(#mask)" fill="#1277b0">
				<defs>
					<linearGradient
						id="gradient"
						gradientTransform="rotate(90)"
					>
						<stop offset="0" stopColor="white" />
						<stop offset="0.5" stopColor="black" />
					</linearGradient>
					<mask id="mask">
						<rect
							x="0"
							y="0"
							width="100%"
							height="200"
							fill="url(#gradient)"
						/>
					</mask>
				</defs>
			</Wave>

			<section className="min-h-screen"></section>
		</>
	);
}

export default Home;
