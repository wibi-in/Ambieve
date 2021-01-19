import React from "react";
import Features from "./Features";
import About from "./About";
import Services from "./Services";
import Steps from "./Steps";
import Team from "./Team";
import Pricing from "./Pricing";
import Testimonial from "./Testimonial";
import Blogs from "./Blogs";
import HeroSection from "./HeroSection";

const PageContent = () => {
	return (
		<>
			<HeroSection />
			<div className="page-content">
				{/* <About /> */}
				{/* <Services /> */}
				<Steps />
				<Features />
				{/* <Team /> */}
				{/* <Pricing /> */}
				<Testimonial />
				{/* <Blogs /> */}
			</div>
		</>
	);
};
export default PageContent;
