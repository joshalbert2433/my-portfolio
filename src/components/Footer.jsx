import React from "react";
import { BsGithub, BsLinkedin, BsFacebook } from "react-icons/bs";

function Footer() {
	return (
		<footer className="bg-base-500 py-2 pb-24 md:py-6 md:pb-6">
			<div className="container mx-auto mt-4 space-y-6 divide-y divide-gray-400 divide-opacity-50 px-6 md:mt-0 md:space-y-12">
				<div className="grid justify-center lg:justify-between">
					<div className="flex flex-col self-center text-center text-sm md:block md:space-x-6 md:text-base lg:col-start-1">
						<span>Copyright © 2023</span>
						<a rel="noopener noreferrer" href="#">
							<span> Created by Joshua Albert Villanueva</span>
						</a>
					</div>
					<div className="flex justify-center space-x-6 pt-4 md:space-x-2 lg:col-end-13 lg:pt-0">
						<a
							rel="noopener noreferrer"
							target="_blank"
							href="https://github.com/joshalbert2433"
							title="Github"
							className="flex items-center justify-center rounded-full md:p-3 md:hover:bg-base-100"
						>
							<BsGithub size={24} />
						</a>
						<a
							rel="noopener noreferrer"
							target="_blank"
							href="https://www.linkedin.com/in/joshua-albert-villanueva-149661209/"
							title="Linkedin"
							className="flex items-center justify-center   rounded-full md:p-3 md:hover:bg-base-100"
						>
							<BsLinkedin size={24} />
						</a>
						<a
							rel="noopener noreferrer"
							target="_blank"
							href="https://www.facebook.com/joshuaalbert.villanueva"
							title="Facebook"
							className="flex items-center justify-center rounded-full md:p-3 md:hover:bg-base-100"
						>
							<BsFacebook size={24} />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
