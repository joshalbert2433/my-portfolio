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
	// console.log();
	return (
		<div className="mx-auto space-y-4 rounded-md bg-base-100 p-4 md:items-start lg:flex lg:gap-8  lg:space-y-0 xl:w-[1200px]">
			<div>
				<Swiper
					loop={true}
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
					breakpoints={{
						1024: {
							// width: 400,
							// height: 800,
						},
						640: {
							// width: 600,
							// height: 900,
						},
					}}
					className="lg:max-w-sm"
				>
					{data.images.map((image, index) => (
						<SwiperSlide key={index}>
							<img
								src={image}
								alt=""
								// className="h-96 w-full object-contain"
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			{/* </div> */}

			<div className="space-y-4">
				<h3 className="text-2xl font-semibold">{data.title}</h3>

				<ul className="flex flex-wrap gap-2">
					<span className="align-middle font-semibold">
						Tools Used:
					</span>
					{data.tools_used.map((tool, index) => (
						<li
							className="rounded-md bg-base-300 px-2 py-1 text-xs"
							key={index}
						>
							{tool}
						</li>
					))}
				</ul>
				<p>{data.description}</p>
				<div className="flex flex-col flex-wrap gap-4 sm:flex-row">
					{data.links.live && (
						<a
							href={data.links.live}
							target="_blank"
							className="btn-sm btn flex gap-2 sm:w-fit"
						>
							<BiLinkExternal />
							Live Demo
						</a>
					)}
					{data.links.github && (
						<a
							href={data.links.github}
							target="_blank"
							className="btn-sm btn flex gap-2 sm:w-fit"
						>
							<FaGithub />
							GitHub
						</a>
					)}
					{data.links.youtube && (
						<a
							href={data.links.youtube}
							target="_blank"
							// ref=""
							className="btn-sm btn flex gap-2 sm:w-fit"
						>
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
