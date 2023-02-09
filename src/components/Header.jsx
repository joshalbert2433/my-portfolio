import React from "react";
import { GiSpinningSword, GiGearHammer } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { AiOutlinePhone } from "react-icons/ai";
import { Link } from "react-scroll";
import { TrendingUp } from "react-feather";

function Header() {
	return (
		<header className="p-4 fixed top-0 z-50 ml-auto w-full">
			<div className="container hidden md:flex justify-end h-16 mx-auto">
				<ul className="items-stretch hidden space-x-3 md:flex">
					<li className="flex">
						<Link
							activeClass="-mb-1 border-b-2"
							to="home"
							spy={true}
							smooth={true}
							offset={-30}
							duration={500}
							className="flex items-center px-4 cursor-pointer"
						>
							Home
						</Link>
					</li>
					<li className="flex">
						<Link
							activeClass="-mb-1 border-b-2"
							to="skills"
							spy={true}
							smooth={true}
							offset={-30}
							duration={500}
							className="flex items-center px-4 cursor-pointer"
						>
							Skills
						</Link>
					</li>
					<li className="flex">
						<Link
							activeClass="-mb-1 border-b-2"
							to="projects"
							spy={true}
							smooth={true}
							offset={-30}
							duration={500}
							className="flex items-center px-4 cursor-pointer"
						>
							Projects
						</Link>
					</li>
					<li className="flex">
						<Link
							activeClass="-mb-1 border-b-2"
							to="contact"
							spy={true}
							smooth={true}
							offset={-30}
							duration={500}
							className="flex items-center px-4 cursor-pointer"
						>
							Contact
						</Link>
					</li>
				</ul>
			</div>
			<div className="btm-nav md:hidden bg-base-200 ">
				<Link
					activeClass="active"
					to="home"
					spy={true}
					smooth={true}
					offset={-30}
					duration={500}
				>
					<FaHome size={20} />
					<span className="btm-nav-label">Home</span>
				</Link>

				<Link
					activeClass="active"
					to="skills"
					spy={true}
					smooth={true}
					offset={-30}
					duration={500}
				>
					<GiSpinningSword size={20} />
					<span className="btm-nav-label">Skills</span>
				</Link>

				<Link
					activeClass="active"
					to="projects"
					spy={true}
					smooth={true}
					offset={-30}
					duration={500}
				>
					<GiGearHammer size={20} />
					<span className="btm-nav-label">Projects</span>
				</Link>

				<Link
					activeClass="active"
					to="contact"
					spy={true}
					smooth={true}
					offset={-30}
					duration={500}
				>
					<AiOutlinePhone size={20} />
					<span className="btm-nav-label">Contact</span>
				</Link>
			</div>
		</header>
	);
}

export default Header;
