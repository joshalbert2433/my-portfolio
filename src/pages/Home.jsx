import React from "react";
import Wave from "react-wavify";
import Header from "../components/Header";
import { TypeAnimation } from "react-type-animation";
import FileText from "../assets/file-text.svg";

function Home() {
	return (
		<>
			<Header />
			{/* <header className="p-4 bg-secondary">
				<div className="container flex justify-between h-16 mx-auto">
					<a
						rel="noopener noreferrer"
						href="#"
						aria-label="Back to homepage"
						className="flex items-center p-2"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 32 32"
							className="w-8 h-8 "
						>
							<path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path>
							<path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
						</svg>
					</a>
					<ul className="items-stretch hidden space-x-3 md:flex">
						<li className="flex">
							<a
								rel="noopener noreferrer"
								href="#"
								className="flex items-center px-4 -mb-1 border-b-2"
							>
								Link
							</a>
						</li>
						<li className="flex">
							<a
								rel="noopener noreferrer"
								href="#"
								className="flex items-center px-4 -mb-1 border-b-2 "
							>
								Link
							</a>
						</li>
						<li className="flex">
							<a
								rel="noopener noreferrer"
								href="#"
								className="flex items-center px-4 -mb-1 border-b-2 "
							>
								Link
							</a>
						</li>
						<li className="flex">
							<a
								rel="noopener noreferrer"
								href="#"
								className="flex items-center px-4 -mb-1 border-b-2 "
							>
								Link
							</a>
						</li>
					</ul>
					<button className="flex justify-end p-4 md:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h16"
							></path>
						</svg>
					</button>
				</div>
			</header> */}
			<section>
				<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
					<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
						<h1 className="text-5xl text-primary font-bold leading-none sm:text-6xl">
							Joshua Albert F. Villanueva
						</h1>
						<p className="mt-6 mb-8 text-lg sm:mb-12">
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
								style={{ fontSize: "2em" }}
							/>
						</p>
						<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
							<a
								rel="noopener noreferrer"
								href="#"
								className="btn btn-secondary"
							>
								View Resume (PDF)
							</a>
						</div>
					</div>
					<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
						<img
							src="https://preview.redd.it/1r0b7q6jmc451.png?auto=webp&s=bc8b11f781c028d9ead4eb4d3e9d25a3685073fa"
							alt=""
							className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
						/>
					</div>
				</div>
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
			</section>
		</>
	);
}

export default Home;
