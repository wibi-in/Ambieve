import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = (data) => {
		let user_data = window.localStorage.getItem("user_data");
		let parsed_data = JSON.parse(user_data);
		let username = data.username;
		let password = data.password;

		if (
			username === parsed_data.email &&
			password === parsed_data.password
		) {
			window.location = "/loginsuccess";
		} else {
			console.log("Oops");
		}
		//alert(JSON.stringify(data));
	};
	return (
		<div className="page-content">
			<section className="login">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-12">
							<img
								className="img-fluid"
								src="images/banner/06.png"
								alt=""
							/>
						</div>
						<div className="col-lg-5 col-md-12 ml-auto mr-auto md-mt-5">
							<div className="login-form text-center">
								<img
									className="img-center mb-5"
									src="images/logo.png"
									alt=""
								/>
								<form
									id="contact-form"
									onSubmit={handleSubmit(onSubmit)}
								>
									<div className="messages"></div>
									<div className="form-group">
										<input
											id="form_name"
											type="text"
											name="username"
											className="form-control"
											placeholder="Email"
											required="required"
											data-error="Username is required."
											ref={register({
												required: "Required",
											})}
										/>
										{errors.username && (
											<div className="help-block with-errors">
												Username is required.
											</div>
										)}
									</div>
									<div className="form-group">
										<input
											id="form_password"
											type="password"
											name="password"
											className="form-control"
											placeholder="Password"
											required="required"
											data-error="password is required."
											ref={register({
												required: "Required",
											})}
										/>
										{errors.password && (
											<div className="help-block with-errors">
												Password is required.
											</div>
										)}
									</div>
									{/* <div className="form-group mt-4 mb-5">
										<div className="remember-checkbox d-flex align-items-center justify-content-between">
											<div className="checkbox">
												<input
													type="checkbox"
													id="check2"
													name="check2"
												/>
												<label for="check2">
													Remember me
												</label>
											</div>
											<a href="/#">Forgot Password?</a>
										</div>
                                    </div>{" "}
                                        */}
									<button
										href="/#"
										className="btn btn-theme btn-block btn-circle"
										data-text="Sign in"
										type="submit"
									>
										<span>S</span>
										<span>i</span>
										<span>g</span>
										<span>n</span>
										<span> </span>
										<span>I</span>
										<span>n</span>
									</button>
								</form>
								<h5 className="mb-0 mt-4 text-capitalize">
									Don't Have An Account ?{" "}
									<a href="/register">
										<i>Sign Up!</i>
									</a>
								</h5>
								<div className="social-icons fullwidth social-colored mt-4 text-center clearfix">
									<ul className="list-inline">
										<li className="social-facebook">
											<a href="/#">Facebook</a>
										</li>
										<li className="social-twitter">
											<a href="/#">Twitter</a>
										</li>
										<li className="social-gplus">
											<a href="/#">Google Plus</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Form;
