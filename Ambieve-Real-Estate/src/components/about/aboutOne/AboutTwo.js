import React from "react";
import dataAbout from "../../data.json";
const URL = require("../../constants");

const About = () => {
	return (
		<section className="pt-0">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 col-md-12">
						<img
							className="img-fluid w-100"
							src={`${URL.img_url}${dataAbout.data.about[1].about.img_url}`}
							alt=""
						/>
					</div>
					<div className="col-lg-6 col-md-12 md-mt-5">
						<div className="section-title mb-3">
							<div className="title-effect title-effect-2">
								<div className="ellipse"></div>{" "}
								<i className="la la-info"></i>
							</div>
							<h2>{dataAbout.data.about[1].about.title}</h2>
						</div>
						<p className="lead">
							{dataAbout.data.about[1].about.description}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
