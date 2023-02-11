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
	});

	const projectData = [
		{
			title: "EZPC",
			images: [EzpcImage1, EzpcImage2, EzpcImage3, EzpcImage4],
			description: `A personal ecommerce website is a
			platform for selling products online,
			offering features such as product
			listings and shopping carts.`,
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
	];

	return (
		<>
			<Header />

			<section className="min-h-screen flex flex-col" id="home">
				<div className="container -mt-6 flex flex-grow flex-col justify-center items-center p-4 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
					<div className="flex flex-col justify-center lg:px-4 text-center lg:max-w-md xl:max-w-2xl lg:text-left">
						<h1 className="text-4xl text-primary tracking-wide font-bold leading-none sm:text-6xl">
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
						<p className="flex justify-center place-items-center gap-2 my-2 text-md lg:place-content-start sm:text-lg sm:mb-4">
							<MdLocationPin />
							Imus, Cavite
						</p>
						<p className="flex justify-center place-items-center gap-2 my-2 text-md lg:place-content-start sm:text-lg sm:mb-4">
							<FiAtSign />
							joshua.albert.villanueva@gmail.com
						</p>
					</div>
					{MyPic ? (
						<div className="flex items-center justify-center p-6 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
							<img
								src={MyPic}
								alt="My Pic"
								className="h-60 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-full object-cover border-8 border-base-300"
							/>
						</div>
					) : null}
				</div>
			</section>
			<WaveAnimation fillColor="#2F5496" isMobile={isMobile} />
			<section className=" bg-base-200 -mt-4 px-4">
				<div className="pb-8 container mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 ">
					<div className="max-w-fit rounded-lg mt-20 mb-12 lg:mt-0 lg:mb-0">
						<div className="container max-w-5xl mx-auto">
							<div className="">
								<h2 className="text-4xl font-bold mb-12">
									My Timeline
								</h2>
								<div className="relative col-span-12 space-y-6 sm:col-span-9">
									<div className="col-span-12 space-y-12 relative sm:pl-8 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:left-1 before:dark:bg-slate-300">
										<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-secondary">
											<h3 className="text-xl font-semibold tracking-wide">
												WEB DEVELOPMENT BOOTCAMP -
												VILLAGE88
											</h3>
											<time className="text-xs tracking-wide uppercase text-accent">
												July 2022 - Oct 2022
											</time>
											<span className="italic">
												Trainee Graduate
											</span>
										</div>
										<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-secondary">
											<h3 className="text-xl font-semibold tracking-wide">
												CAVITE STATE UNIVERSITY - IMUS
												CAMPUS
											</h3>
											<time className="text-xs tracking-wide uppercase text-accent">
												2017-2023
											</time>
											<span className="italic">
												Bachelor of Science in
												Information Technology
											</span>
										</div>
										<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-secondary">
											<h3 className="text-xl font-semibold tracking-wide">
												Datacom Institute of Computer
												Technology
											</h3>
											<time className="text-xs tracking-wide uppercase text-accent">
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
						<h2 className="text-4xl font-bold mb-12">My Skills</h2>
						<div className=" flex flex-wrap gap-4 md:gap-6">
							{skills.map((skill, index) => (
								<div
									className="py-2 px-4 bg-base-100 rounded-md font-semibold"
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
					className=" bg-base-300 -mt-4 px-4 pb-8 "
					id="projects"
				>
					<div className="container mx-auto ">
						<h2 className="text-4xl font-bold mb-12 md:text-center">
							Projects
						</h2>
						<div>
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
					className="min-h-screen bg-base-400 -mt-4 px-4  rounded-lg pt-4 pb-24"
					id="contact"
				>
					<h2 className="text-4xl font-bold  mb-12 md:text-center">
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
