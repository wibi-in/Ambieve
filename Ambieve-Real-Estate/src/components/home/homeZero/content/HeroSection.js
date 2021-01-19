import React from "react";
import dataHerosection from "../../../data.json";


const HeroSectionFour = () => {
	return (
		<>
			{/* hero section :: start */}
			<section className="fullscreen-banner banner p-0 grediant-bg">
				<div className="h-100" data-bg-img="images/bg/07.png">
					<div className="align-center pt-0">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-lg-7 col-md-12 order-lg-12">
									<div
										className="owl-carousel owl-theme no-pb"
										data-dots="false"
										data-items="1"
										data-autoplay="true"
									>
										<div className="item">
											<div className="img-box">
												{/* <div className="box-loader">
													{" "}
													<span></span>
													<span></span>
													<span></span>
												</div> */}
												<img
													className="img-center"
													src="images/banner/invest.png"
													alt=""
													// style={{height: "650px", width: "850px"}}
												/>
											</div>
										</div>
										<div className="item">
											<div className="img-box">
												<img
													className="img-center"
													src="images/banner/acquire.png"
													alt=""
												/>
											</div>
										</div>
										<div className="item">
											<div className="img-box">
												<img
													className="img-center"
													src="images/banner/earn.png"
													alt=""
												/>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-5 col-md-12 md-mt-5 order-lg-1">
									<h1
										className="mb-4 text-white wow fadeInUp"
										data-wow-duration="1.5s"
									>
										{
											dataHerosection.data.home[3].content
												.herosection.title1
										}
										<br/>
										{
											dataHerosection.data.home[3].content
												.herosection.title2
										}
										<br/>
										{
											dataHerosection.data.home[3].content
												.herosection.title3
										}
									</h1>
									<p
										className="lead mb-3 text-white wow fadeInUp"
										data-wow-duration="2s"
										data-wow-delay="0.3s"
									>
										{
											dataHerosection.data.home[3].content
												.herosection.description
										}
									</p>
									<p className="lead wow fadeInUp"
										style={{color: "white"}}
										data-wow-duration="2s"
										data-wow-delay="0.3s"
									>
										{
											dataHerosection.data.home[3].content.herosection.sub_description
										}
									</p>
									{/* <div className="video-box">
										<div className="video-btn heartbeat">
											{" "}
											<a
												className="play-btn popup-youtube"
												href="https://www.youtube.com/watch?v=P_wKDMcr1Tg"
											>
												<i className="la la-play"></i>
											</a>
											<div className="spinner-eff">
												<div className="spinner-circle circle-1"></div>
												<div className="spinner-circle circle-2"></div>
											</div>
										</div>
									</div> */}
								</div>
							</div>
						</div>
					</div>
				</div>
				<svg
					className="wave-animation"
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					viewBox="0 24 150 28"
					preserveAspectRatio="none"
				>
					<defs>
						<path
							id="gentle-wave"
							d="M-160 44c30 0 
							58-18 88-18s
							58 18 88 18 
							58-18 88-18 
							58 18 88 18
							v44h-352z"
						/>
					</defs>
					<g className="wave-bg">
						<use
							xlinkHref="#gentle-wave"
							x="50"
							y="0"
							fill="rgba(50,205,50,0.2)"
						/>
						<use
							xlinkHref="#gentle-wave"
							x="50"
							y="3"
							fill="rgba(81,224,48,0.2)"
						/>
						<use
							xlinkHref="#gentle-wave"
							x="50"
							y="6"
							fill="#ffffff"
						/>
					</g>
				</svg>
			</section>
		</>
	);
};

export default HeroSectionFour;
