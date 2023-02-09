import React from "react";
import { BsGithub, BsLinkedin, BsFacebook } from "react-icons/bs";

function Footer() {
	return (
		<footer className="py-2 bg-base-500 pb-24 md:py-6 md:pb-6">
			<div className="container px-6 mx-auto space-y-6 mt-4 md:mt-0 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
				{/* <div className="grid grid-cols-12">
					<div className="pb-6 col-span-full md:pb-0 md:col-span-6">
						<a
							rel="noopener noreferrer"
							href="#"
							className="flex justify-center space-x-3 md:justify-start"
						>
							<div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 32 32"
									fill="currentColor"
									className="flex-shrink-0 w-5 h-5 rounded-full dark:text-gray-900"
								>
									<path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
								</svg>
							</div>
							<span className="self-center text-2xl font-semibold">
								Brand name
							</span>
						</a>
					</div>
					<div className="col-span-6 text-center md:text-left md:col-span-3">
						<p className="pb-1 text-lg font-medium">Category</p>
						<ul>
							<li>
								<a
									rel="noopener noreferrer"
									href="#"
									className="hover:dark:text-violet-400"
								>
									Link
								</a>
							</li>
							<li>
								<a
									rel="noopener noreferrer"
									href="#"
									className="hover:dark:text-violet-400"
								>
									Link
								</a>
							</li>
							<li>
								<a
									rel="noopener noreferrer"
									href="#"
									className="hover:dark:text-violet-400"
								>
									Link
								</a>
							</li>
							<li>
								<a
									rel="noopener noreferrer"
									href="#"
									className="hover:dark:text-violet-400"
								>
									Link
								</a>
							</li>
							<li>
								<a
									rel="noopener noreferrer"
									href="#"
									className="hover:dark:text-violet-400"
								>
									Link
								</a>
							</li>
						</ul>
					</div>
					<div className="col-span-6 text-center md:text-left md:col-span-3">
						<p className="pb-1 text-lg font-medium">Category</p>
						<ul>
							<li>
								<a
									rel="noopener noreferrer"
									href="#"
									className="hover:dark:text-violet-400"
								>
									Link
								</a>
							</li>
							<li>
								<a
									rel="noopener noreferrer"
									href="#"
									className="hover:dark:text-violet-400"
								>
									Link
								</a>
							</li>
							<li>
								<a
									rel="noopener noreferrer"
									href="#"
									className="hover:dark:text-violet-400"
								>
									Link
								</a>
							</li>
							<li>
								<a
									rel="noopener noreferrer"
									href="#"
									className="hover:dark:text-violet-400"
								>
									Link
								</a>
							</li>
							<li>
								<a
									rel="noopener noreferrer"
									href="#"
									className="hover:dark:text-violet-400"
								>
									Link
								</a>
							</li>
						</ul>
					</div>
				</div> */}
				<div className="grid justify-center lg:justify-between">
					<div className="flex flex-col self-center text-sm md:text-base text-center md:block lg:col-start-1 md:space-x-6">
						<span>Copyright © 2023</span>
						<a rel="noopener noreferrer" href="#">
							<span> Created by Joshua Albert Villanueva</span>
						</a>
					</div>
					<div className="flex justify-center pt-4 space-x-6 md:space-x-2 lg:pt-0 lg:col-end-13">
						<a
							rel="noopener noreferrer"
							href="#"
							title="Email"
							className="flex items-center justify-center md:p-3 rounded-full md:hover:bg-base-100"
						>
							<BsGithub size={24} />
						</a>
						<a
							rel="noopener noreferrer"
							href="#"
							title="Twitter"
							className="flex items-center justify-center   md:p-3 rounded-full md:hover:bg-base-100"
						>
							<BsLinkedin size={24} />
						</a>
						<a
							rel="noopener noreferrer"
							href="#"
							title="GitHub"
							className="flex items-center justify-center md:p-3 rounded-full md:hover:bg-base-100"
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
