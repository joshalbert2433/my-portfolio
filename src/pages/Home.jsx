import React, { useEffect, useState } from "react";
import Wave from "react-wavify";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { TypeAnimation } from "react-type-animation";
import { MdLocationPin } from "react-icons/md";
import { FiAtSign } from "react-icons/fi";
import { BiLinkExternal } from "react-icons/bi";
import { FaGithub, FaYoutube } from "react-icons/fa";
import MyPic from "../assets/me.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";
import ContactForm from "../components/ContactForm";

const skills = [
	"Javascript",
	"PHP",
	"Python",
	"HTML",
	"CSS",
	"LESS",
	"SASS",
	"Bootstrap",
	"React-bootstrap",
	"Tailwind CSS",
	"DaisyUI",
	"ReactJS",
	"ExpressJS",
	"CodeIgniter",
	"JQuery",
	"JQueryUI",
	"Socket.IO",
	"JWT",
	"PassportJS",
	"Formik",
	"Yup",
	"EJS",
	"Vite",
	"Swiper",
	"NodeJS",
	"Axios",
	"AJAX",
	"MySQL",
	"MongoDB",
	"Mongoose",
	"OOP",
	"MVC",
	"RWD",
	"REST API",
	"Git",
	"Github",
	"Docker",
	"MySQL Workbench",
	"MongoDBCompass",
	"Postman",
	"Insomnia",
];

const projectData = [
	{
		title: "EZPC",
		images: [
			"https://gsi-portpolio.com/assets/img/ipos1-project.png",
			"https://wallpaperaccess.com/full/671214.jpg",
			"https://dotawallpapers.com/wallpaper/dotawallpapers.com-dota-2-windranger-arcana-4088-1920x1191.jpg",
		],
		tools_used: [
			"ReactJS",
			"ExpressJS",
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
			github: "https://github.com/joshalbert2433",
			youtube:
				"https://www.youtube.com/watch?v=LGEsM5l9U7U&list=RDLGEsM5l9U7U&start_radio=1",
		},
	},
];

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
			<Wave
				mask="url(#mask)"
				fill="#2F5496"
				options={{
					height: 40,
					amplitude: 20,
					speed: 0.35,
					points: isMobile ? 2 : 7,
				}}
			>
				<defs>
					<linearGradient
						id="gradient"
						gradientTransform="rotate(90)"
					>
						<stop offset="0" stopColor="black" />
						<stop offset="0.5" stopColor="white" />
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
				<Wave
					mask="url(#mask)"
					fill="#2A4B87"
					options={{
						height: 40,
						amplitude: 20,
						speed: 0.35,
						points: isMobile ? 2 : 7,
					}}
				>
					<defs>
						<linearGradient
							id="gradient"
							gradientTransform="rotate(90)"
						>
							<stop offset="0" stopColor="black" />
							<stop offset="0.5" stopColor="white" />
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
				<section
					className=" bg-base-300 -mt-4 px-4 pb-8 "
					id="projects"
				>
					<div className="container mx-auto ">
						<h2 className="text-4xl font-bold mb-12 md:text-center">
							Projects
						</h2>
						{projectData.map((data, index) => (
							<div
								className="space-y-4 bg-base-100 p-4 rounded-md md:flex md:items-start	 md:gap-8 max-w-6xl mx-auto"
								key={index}
							>
								<Swiper
									spaceBetween={30}
									centeredSlides={true}
									autoplay={{
										delay: 3500,
										disableOnInteraction: false,
									}}
									pagination={{
										clickable: true,
									}}
									navigation={true}
									modules={[Autoplay, Pagination, Navigation]}
									style={{
										maxWidth: "400px",
									}}
									// className="px-12"
								>
									{data.images.map((image, index) => (
										<SwiperSlide key={index}>
											<img
												src={image}
												alt=""
												className="h-80 w-full object-contain"
											/>
										</SwiperSlide>
									))}
								</Swiper>
								<div className="space-y-4">
									<h3 className="text-2xl font-semibold">
										EZPC
									</h3>

									<ul className="flex flex-wrap gap-2">
										<span className="align-middle font-semibold">
											Tools Used:
										</span>
										{data.tools_used.map((tool, index) => (
											<li
												className="text-xs px-2 py-1 bg-base-300 rounded-md"
												key={index}
											>
												{tool}
											</li>
										))}
									</ul>
									<p>
										A personal ecommerce website is a
										platform for selling products online,
										offering features such as product
										listings and shopping carts.
									</p>
									<div className="flex flex-col sm:flex-row gap-4 flex-wrap">
										<a className="btn btn-sm flex gap-2 sm:w-fit">
											<BiLinkExternal />
											Live Demo
										</a>
										<a className="btn btn-sm flex gap-2 sm:w-fit">
											<FaGithub />
											GitHub
										</a>
										<a className="btn btn-sm flex gap-2 sm:w-fit">
											<FaYoutube />
											Video Demo
										</a>
									</div>
								</div>
							</div>
						))}
					</div>
				</section>
			</div>

			<div className="bg-base-300">
				<Wave
					mask="url(#mask)"
					fill="#27457C"
					options={{
						height: 40,
						amplitude: 20,
						speed: 0.35,
						points: isMobile ? 2 : 7,
					}}
				>
					<defs>
						<linearGradient
							id="gradient"
							gradientTransform="rotate(90)"
						>
							<stop offset="0" stopColor="black" />
							<stop offset="0.5" stopColor="white" />
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
