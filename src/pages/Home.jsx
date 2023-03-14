import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { TypeAnimation } from "react-type-animation";
import { MdLocationPin } from "react-icons/md";
import { FiAtSign } from "react-icons/fi";
import MyPic from "../assets/me.jpg";
import WaveAnimation from "../components/WaveAnimation";
import ProjectCard from "../components/ProjectCard";
import { skills } from "../myData";
import EzpcImage1 from "../assets/ezpc1.png";
import EzpcImage2 from "../assets/ezpc2.png";
import EzpcImage3 from "../assets/ezpc3.png";
import EzpcImage4 from "../assets/ezpc4.png";
import AraImage1 from "../assets/ara (1).png";
import AraImage2 from "../assets/ara (2).png";
import AraImage3 from "../assets/ara (3).png";
import AraImage4 from "../assets/ara (4).png";
import Countries1 from "../assets/countries (1).png";
import Countries2 from "../assets/countries (2).png";
import Countries3 from "../assets/countries (3).png";
import Countries4 from "../assets/countries (4).png";

import ContactForm from "../components/ContactForm";

function Home() {
	const [isMobile, setIsMobile] = useState(false);

	const handleResize = () => {
		if (window.innerWidth < 720) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	};
	useEffect(() => {
		handleResize();
		window.addEventListener("resize", handleResize);
	}, [isMobile]);

	const projectData = [
		{
			title: "EZPC",
			images: [EzpcImage1, EzpcImage2, EzpcImage3, EzpcImage4],
			description:
				"An E-commerce website that simulates an online shopping experience that can be expanded into a more established website in the future.",
			tools_used: [
				"ReactJS",
				"ExpressJS",
				"MongoDB",
				"REST API",
				"Tailwind CSS",
				"DaisyUI",
				"Axios",
				"JWT",
				"Formik",
				"Yup",
				"Mongoose",
			],
			links: {
				live: "https://ezpc-cpm3.onrender.com/",
				github: "https://github.com/joshalbert2433/EZPC",
				youtube: "https://youtu.be/Vqg9NH-3lc8",
			},
		},
		{
			title: "AraAraAnime",
			images: [AraImage1, AraImage2, AraImage3, AraImage4],
			description: `A website that helps users navigate through a large library of anime content.`,
			tools_used: [
				"ReactJS",
				"React-query",
				"GogoAnime API",
				"Tailwind CSS",
				"DaisyUI",
				"Axios",
				"React-hls-player",
				"React-icons",
				"Swiper",
			],
			links: {
				github: "https://github.com/joshalbert2433/ara-ara-anime",
			},
		},
		{
			title: "REST Countries API with color theme switcher",
			images: [Countries1, Countries2, Countries3, Countries4],
			description: `A frontend mentor challenge that allows users to search and filter countries with details.`,
			tools_used: [
				"ReactJS",
				"React-query",
				"REST Countries API",
				"Tailwind CSS",
				"DaisyUI",
				"Axios",
				"React-icons",
			],
			links: {
				github: "https://github.com/joshalbert2433/rest-coutries-api-with-theme-switcher",
				live: "https://rest-coutries-api-with-theme-switcher.vercel.app/",
			},
		},
	];

	return (
		<>
			<Header />

			<section className="flex min-h-screen flex-col" id="home">
				<div className="container mx-auto -mt-6 flex flex-grow flex-col items-center justify-center p-4 sm:py-12 lg:flex-row lg:justify-between lg:py-24">
					<div className="flex flex-col justify-center text-center lg:max-w-md lg:px-4 lg:text-left xl:max-w-2xl">
						<h1 className="text-4xl font-bold leading-none tracking-wide text-primary sm:text-6xl">
							HI, I AM JOSHUA ALBERT VILLANUEVA
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
										// console.log("Done typing!"); // Place optional callbacks anywhere in the array
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
						<p className="text-md my-2 flex place-items-center justify-center gap-2 sm:mb-4 sm:text-lg lg:place-content-start">
							<MdLocationPin />
							Imus, Cavite
						</p>
						<p className="text-md my-2 flex place-items-center justify-center gap-2 sm:mb-4 sm:text-lg lg:place-content-start">
							<FiAtSign />
							joshua.albert.villanueva@gmail.com
						</p>
					</div>
					{MyPic ? (
						<div className="xl:h-112 2xl:h-128 flex h-72 items-center justify-center p-6 sm:h-80 lg:mt-0 lg:h-96">
							<img
								src={MyPic}
								alt="My Pic"
								className="xl:h-112 2xl:h-128 h-60 rounded-full border-8 border-base-300 object-cover sm:h-80 lg:h-96"
							/>
						</div>
					) : null}
				</div>
			</section>
			<WaveAnimation fillColor="#2F5496" isMobile={isMobile} />
			<section className=" mx-auto -mt-4 bg-base-200 px-4">
				<div className="container mx-auto flex flex-col-reverse pb-8 lg:grid lg:grid-cols-2 ">
					<div className="mx-auto mt-20 mb-12 max-w-fit rounded-lg lg:mx-0 lg:mt-0 lg:mb-0       ">
						<div className="container mx-auto max-w-5xl">
							<div className="">
								<h2 className="mb-12 text-center text-4xl font-bold lg:text-left">
									My Timeline
								</h2>
								<div className="relative col-span-12 space-y-6 sm:col-span-9">
									<div className="relative col-span-12 space-y-12 before:dark:bg-slate-300 sm:col-span-8 sm:space-y-8 sm:pl-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:left-1 sm:before:w-0.5">
										<div className="flex flex-col before:bg-secondary sm:relative sm:before:absolute sm:before:top-2 sm:before:left-[-35px] sm:before:z-[1] sm:before:h-4 sm:before:w-4 sm:before:rounded-full">
											<h3 className="text-xl font-semibold tracking-wide">
												WEB DEVELOPMENT BOOTCAMP -
												VILLAGE88
											</h3>
											<time className="text-xs uppercase tracking-wide text-accent">
												July 2022 - Oct 2022
											</time>
											<span className="italic">
												Trainee Graduate
											</span>
										</div>
										<div className="flex flex-col before:bg-secondary sm:relative sm:before:absolute sm:before:top-2 sm:before:left-[-35px] sm:before:z-[1] sm:before:h-4 sm:before:w-4 sm:before:rounded-full">
											<h3 className="text-xl font-semibold tracking-wide">
												CAVITE STATE UNIVERSITY - IMUS
												CAMPUS
											</h3>
											<time className="text-xs uppercase tracking-wide text-accent">
												2017-2023
											</time>
											<span className="italic">
												Bachelor of Science in
												Information Technology
											</span>
										</div>
										<div className="flex flex-col before:bg-secondary sm:relative sm:before:absolute sm:before:top-2 sm:before:left-[-35px] sm:before:z-[1] sm:before:h-4 sm:before:w-4 sm:before:rounded-full">
											<h3 className="text-xl font-semibold tracking-wide">
												Datacom Institute of Computer
												Technology
											</h3>
											<time className="text-xs uppercase tracking-wide text-accent">
												2014-2017
											</time>
											<span className="italic">
												Multimedia and Information
												Technology
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="container mx-auto" id="skills">
						<h2 className="mb-12 text-center text-4xl font-bold lg:text-left">
							My Skills
						</h2>
						<div className=" flex flex-wrap gap-4 md:gap-6">
							{skills.map((skill, index) => (
								<div
									className="rounded-md bg-base-100 py-2 px-4 font-semibold"
									key={index}
								>
									{skill}
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			<div className="bg-base-200">
				<WaveAnimation fillColor="#2A4B87" isMobile={isMobile} />

				<section
					className=" -mt-4 bg-base-300 px-4 pb-8 "
					id="projects"
				>
					<div className="container mx-auto ">
						<h2 className="mb-12 text-center text-4xl font-bold">
							Projects
						</h2>

						<div className="space-y-4">
							{projectData.map((data, index) => (
								<ProjectCard data={data} key={index} />
							))}
						</div>
					</div>
				</section>
			</div>

			<div className="bg-base-300">
				<WaveAnimation fillColor="#27457C" isMobile={isMobile} />
				<section
					className="bg-base-400 -mt-4 min-h-screen rounded-lg  px-4 pt-4 pb-24"
					id="contact"
				>
					<h2 className="mb-12 text-center  text-4xl font-bold">
						Contact Me
					</h2>
					<ContactForm />
				</section>
			</div>
			<Footer />
		</>
	);
}

export default Home;
