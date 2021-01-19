import React, { useState } from "react";
//import { useLocation } from 'react-router-dom';
import Loader from "./Loader";
import dataHeader from "./data.json";
//import './theme-color/color-1.css'
const URL = require("./constants");

const Header1 = () => {
	// let location = useLocation();
	// console.log(location.pathname);
	// console.log(dataHeader.data.home[0]);
	// if(location.pathname === "/"){
	// 	require('./theme-color/color-1.css');
	// }
	const storedPage = localStorage.getItem("page");
	const [breadcrumb] = useState(storedPage);
	const fun = (value) => {
		localStorage.setItem("page", value);
	};
	return (
		<>
			<Loader />
			<header id="site-header" className="header header-1">
				<div className="container-fluid">
					<div id="header-wrap" className="box-shadow">
						<div className="row">
							<div className="col-lg-12">
								{/* Navbar */}
								<nav className="navbar navbar-expand-lg">
									<a className="navbar-brand logo" href="/"
										onClick={() =>
											fun(
												"home"
											)
										}
									>
										<img
											id="logo-img"
											className="img-center"
											src={`${URL.img_url}${dataHeader.data.home[0].logo}`}
											alt=""
										/>
									</a>
									<button
										className="navbar-toggler"
										type="button"
										data-toggle="collapse"
										data-target="#navbarNavDropdown"
										aria-expanded="false"
										aria-label="Toggle navigation"
									>
										{" "}
										<span></span>
										<span></span>
										<span></span>
									</button>
									<div
										className="collapse navbar-collapse"
										id="navbarNavDropdown"
									>
										{/* Left nav */}
										<ul
											id="main-menu"
											className="nav navbar-nav ml-auto mr-auto"
										>
											<li className="nav-item">
												{" "}
												<a
													onClick={() =>
														fun(
															"home"
														)
													}
													className={`nav-link ${
														breadcrumb === "home"
															? "active"
															: ""
													}`}
													href="/"
												>
													Home
												</a>
												{/* <ul>
													{dataHeader.data.home.map(
														(data, index) => (
															<li key={index}>
																<a
																	onClick={() =>
																		fun(
																			"home"
																		)
																	}
																	href={`/${data["link"]}`}
																>
																	{
																		data[
																			"title"
																		]
																	}
																</a>
															</li>
														)
													)}
												</ul> */}
											</li>
											{/* <li className="nav-item">
												{" "}
												<a
													className={`nav-link ${
														breadcrumb === "pages"
															? "active"
															: ""
													}`}
													href="/#"
												>
													Pages
												</a>
												<ul>
													{dataHeader.data.pages.map(
														(data, index) => (
															<li key={index}>
																<a
																	onClick={() =>
																		fun(
																			"pages"
																		)
																	}
																	href={`/${data["link"]}`}
																>
																	{
																		data[
																			"title"
																		]
																	}
																</a>
															</li>
														)
													)}

													<li>
														<a href="/#">Element</a>
														<ul>
															{dataHeader.data.element.map(
																(
																	data,
																	index
																) => (
																	<li
																		onClick={() =>
																			fun(
																				"pages"
																			)
																		}
																		key={
																			index
																		}
																	>
																		<a
																			href={`/${data["link"]}`}
																		>
																			{
																				data[
																					"title"
																				]
																			}
																		</a>
																	</li>
																)
															)}
														</ul>
													</li>
												</ul>
											</li> */}
											<li className="nav-item">
												<a
													onClick={() =>
														fun(
															"about"
														)
													}
													className={`nav-link ${
														breadcrumb === "about"
															? "active"
															: ""
													}`}
													href="/about"
												>
													About Us
												</a>
												{/* <ul>
													{dataHeader.data.about.map(
														(data, index) => (
															<li key={index}>
																<a
																	onClick={() =>
																		fun(
																			"about"
																		)
																	}
																	href={`/${data["link"]}`}
																>
																	{
																		data[
																			"title"
																		]
																	}
																</a>
															</li>
														)
													)}
												</ul> */}
											</li>
											<li className="nav-item">
												{" "}
												<a
													onClick={() =>
														fun(
															"service"
														)
													}
													className={`nav-link ${
														breadcrumb === "service"
															? "active"
															: ""
													}`}
													href="/service"
												>
													Services
												</a>
												{/* <ul>
													{dataHeader.data.services.map(
														(data, index) => (
															<li key={index}>
																<a
																	onClick={() =>
																		fun(
																			"service"
																		)
																	}
																	href={`/${data["link"]}`}
																>
																	{
																		data[
																			"title"
																		]
																	}
																</a>
															</li>
														)
													)}
												</ul> */}
											</li>
											{/* <li className="nav-item">
												{" "}
												<a
													className={`nav-link ${
														breadcrumb === "blogs"
															? "active"
															: ""
													}`}
													href="/#"
												>
													Blogs
												</a>
												<ul>
													{dataHeader.data.blogs.map(
														(data, index) => (
															<li key={index}>
																<a
																	onClick={() =>
																		fun(
																			"blogs"
																		)
																	}
																	href={`/${data["link"]}`}
																>
																	{
																		data[
																			"title"
																		]
																	}
																</a>
															</li>
														)
													)}
												</ul>
											</li> */}
											
											<li className="nav-item">
												{" "}
												<a
													onClick={() =>
														fun(
															"contact"
														)
													}

													className={`nav-link ${
														breadcrumb === "contact"
															? "active"
															: ""
													}`}
													href="/contact"
												>
													Contact Us
												</a>
												{/* <ul>
													{dataHeader.data.contact.map(
														(data, index) => (
															<li key={index}>
																<a
																	onClick={() =>
																		fun(
																			"contact"
																		)
																	}
																	href={`/${data["link"]}`}
																>
																	{
																		data[
																			"title"
																		]
																	}
																</a>
															</li>
														)
													)}
												</ul> */}
											</li>
										</ul>
									</div>
									{/* <a
										className="btn btn-theme btn-sm"
										href={`/${dataHeader.data.login.link}`}
										data-text="Login"
									>
										{" "}
										<span>L</span>
										<span>o</span>
										<span>g</span>
										<span>i</span>
										<span>n</span>
									</a> */}
								</nav>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header1;
