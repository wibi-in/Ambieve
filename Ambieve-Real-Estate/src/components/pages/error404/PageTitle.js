import React from "react";

const PageTitle = () => {
	return (
		<>
			<section
				className="page-title o-hidden pos-r md-text-center"
				data-bg-color="#0276FD"
			>
				<canvas id="confetti"></canvas>
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-7 col-md-12">
							<h1 className="title" style={{color: "white"}}>
								404 Error
							</h1>
						</div>
						<div className="col-lg-5 col-md-12 text-lg-right md-mt-3">
							<nav
								aria-label="breadcrumb"
								className="page-breadcrumb"
							>
							</nav>
						</div>
					</div>
				</div>
				<div className="page-title-pattern">
					<img className="img-fluid" src="images/bg/11.png" alt="" />
				</div>
			</section>
		</>
	);
};
export default PageTitle;
