import Image from "next/image";
import Link from "next/link";
import React from "react";
import rick from "../public/assets/projects/rick.png";
import supreme from "../public/assets/projects/mediake.png";
import waive from "../public/assets/projects/waive.png";
import dcs from "../public/assets/projects/dcs.png";

import ProjectItem from "./ProjectItem";

const Projects = () => {
	return (
		<div className="w-full">
			<div className="max-w-[1240px] mx-auto px-2 py-16">
				<p className="uppercase text-xl tracking-widest text-[#722410]">
					Projects/Open Source
				</p>
				<h2 className="py-2 text-[#234894]">What I&apos;ve Built</h2>
				<div className="grid md:grid-cols-2 gap-8">
					<ProjectItem
						title="Rick & Morty Characters"
						backgroundImg={rick}
            skills="React JS | Bootstrap UI"
						projectUrl="/property"
					/>
					<ProjectItem
						title="Supreme Media Kenya"
						backgroundImg={supreme}
            skills="React JS | CSS"
						projectUrl="/supreme"
					/>
					<ProjectItem
						title="Electrical Medical Records Ke"
						backgroundImg={waive}
            skills="Java | Spring | SpringBoot"
						projectUrl="/kenyaemr"
					/>
					<ProjectItem
						title="Child Protection System"
						backgroundImg={dcs}
            skills="Python | Django | Unit Testing"
						projectUrl="/cpims"
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
