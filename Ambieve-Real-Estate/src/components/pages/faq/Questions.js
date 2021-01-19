import React from "react";
import dataFaq from "../../data.json";

const Questions = () => {
	let counter = 1;
	return (
		<>
			<section className="z-index-1">
				<div className="container">
					<div className="row text-center">
						<div className="col-lg-8 col-md-12 ml-auto mr-auto">
							<div className="section-title">
								<div className="title-effect">
									<div className="bar bar-top"></div>
									<div className="bar bar-right"></div>
									<div className="bar bar-bottom"></div>
									<div className="bar bar-left"></div>
								</div>
								<h6>{dataFaq.data.faq.title}</h6>
								<h2 className="title">
									{dataFaq.data.faq.sub_title}
								</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12 ml-auto">
							<div id="accordion" className="accordion style-1">
								{dataFaq.data.faq.questions.map(
									(question, index) => (
										<div
											className={`card ${
												counter === 1 ? "active" : ""
											}`}
											key={index}
										>
											<div className="card-header">
												<h6 className="mb-0">
													<a
														data-toggle="collapse"
														data-parent="#accordion"
														href={`#collapse${counter}`}
														aria-expanded="true"
													>
														{question["title"]}
													</a>
												</h6>
											</div>
											<div
												id={`collapse${counter}`}
												className={`collapse ${
													counter++ === 1 ? "show" : ""
												}`}
												data-parent="#accordion"
											>
												<div className="card-body">
													{question["description"]}
												</div>
											</div>
										</div>
									)
								)}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default Questions;
