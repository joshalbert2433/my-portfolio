import React from "react";

function Header() {
	return (
		<header className="p-4 fixed top-0 z-50 ml-auto w-full">
			<div className="container flex justify-end h-16 mx-auto">
				<ul className="items-stretch hidden space-x-3 md:flex">
					<li className="flex">
						<a
							rel="noopener noreferrer"
							href="#"
							className="flex items-center px-4 -mb-1 border-b-2"
						>
							Home
						</a>
					</li>
					<li className="flex">
						<a
							rel="noopener noreferrer"
							href="#"
							className="flex items-center px-4 "
						>
							Skills
						</a>
					</li>
					<li className="flex">
						<a
							rel="noopener noreferrer"
							href="#"
							className="flex items-center px-4 "
						>
							Project
						</a>
					</li>
					<li className="flex">
						<a
							rel="noopener noreferrer"
							href="#"
							className="flex items-center px-4  "
						>
							Contact
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
		</header>
	);
}

export default Header;
