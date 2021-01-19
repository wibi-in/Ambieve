import React from "react";

const Title = () => {
	return (
		<section
			className="page-title o-hidden pos-r md-text-center"
			data-bg-color="#0276FD"
		>
			<canvas id="confetti"></canvas>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-7 col-md-12">
						<h1 className="title" style={{color: "white"}}>
							Services
						</h1>
						{/* <p style={{color: "white"}}>We're Building Modern And High Software</p> */}
					</div>
					{/* <div className="col-lg-5 col-md-12 text-lg-right md-mt-3">
						<nav
							aria-label="breadcrumb"
							className="page-breadcrumb"
						>
							<ol className="breadcrumb">
								<li className="breadcrumb-item">
									<a href="home-one">Home</a>
								</li>
								<li className="breadcrumb-item">
									<a href="/#">Services</a>
								</li>
								<li
									className="breadcrumb-item active"
									aria-current="page"
								>
									Services
								</li>
							</ol>
						</nav>
					</div> */}
				</div>
			</div>
			<div className="page-title-pattern">
				<img className="img-fluid" src="images/bg/11.png" alt="" />
			</div>
		</section>
	);
};

export default Title;