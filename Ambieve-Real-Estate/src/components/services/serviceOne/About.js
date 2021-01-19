import React from "react";
import dataAbout from "../../data.json";

const About = () => {
	return (
		<section className="text-center" data-bg-img="images/pattern/01.png">
			<div className="container">
				<div className="row">
					<div className="col-lg-10 col-md-12 ml-auto mr-auto">
						<h3 className="text-black font-weight-normal line-h-2">
							Ambieve Real Estate provides you with A-Z{" "}
							<span className="text-theme">Real Estate Solutions</span>
						</h3>
					</div>
				</div>
				<div className="row mt-5">
					{dataAbout.data.services[0].about.features.map(
						(feature, index) => (
							<div className="col-lg-4 col-md-6 mt-5" key={index}>
								<div className="featured-item style-2">
									<div className="featured-icon">
										{" "}
										<i className={`${feature["icon"]}`}></i>
										<span className="rotateme"></span>
									</div>
									<div className="featured-title">
										<h5>{feature["title"]}</h5>
									</div>
									<div className="featured-desc">
										<p>{feature["description"]}</p>
										{/* <a className="icon-btn mt-4" href="/#">
											{" "}
											<i className="la la-angle-right"></i>
										</a> */}
									</div>
								</div>
							</div>
						)
					)}
				</div>
			</div>
		</section>
	);
};

export default About;
