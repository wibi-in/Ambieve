import React from "react";
import Header from "../../Header1";
import Footer from "../../Footer1";
import Title from "./Title";
import Step from "./Step";
import AboutTwo from "./AboutTwo";
import Services from "./Services";
import Timeline from "./Timeline";
import Team from "./Team";
import Pricing from "./Pricing";
import Testimonial from "./Testimonial";
import Blog from "./Blog";

const AboutOne = () => {
	return (
		<>
			<Header />
			<Title />
			<div className="page-content">
				{/* <Step /> */}
				<AboutTwo />
				<Services />
				{/* <Timeline /> */}
				{/* <Team /> */}
				{/* <Pricing /> */}
				{/* <Testimonial /> */}
				{/* <Blog /> */}
			</div>
			<Footer />
		</>
	);
};
export default AboutOne;
