import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";

import { BiLinkExternal } from "react-icons/bi";
import { FaGithub, FaYoutube } from "react-icons/fa";

function ProjectCard({ data }) {
	// console.log(data);
	return (
		<div className="space-y-4 bg-base-100 p-4 rounded-md md:flex md:items-start	 md:gap-8 max-w-6xl mx-auto">
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
				<h3 className="text-2xl font-semibold">{data.title}</h3>

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
				<p>{data.description}</p>
				<div className="flex flex-col sm:flex-row gap-4 flex-wrap">
					{data.links.live && (
						<a className="btn btn-sm flex gap-2 sm:w-fit">
							<BiLinkExternal />
							Live Demo
						</a>
					)}
					{data.links.github && (
						<a className="btn btn-sm flex gap-2 sm:w-fit">
							<FaGithub />
							GitHub
						</a>
					)}
					{data.links.youtube && (
						<a className="btn btn-sm flex gap-2 sm:w-fit">
							<FaYoutube />
							Video Demo
						</a>
					)}
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
