import React from "react";
import { navigate } from "gatsby";
import Layout from "../../components/Layout";
import Recaptcha from "react-google-recaptcha";

// const RECAPTCHA_KEY = process.env.GATSBY_APP_SITE_RECAPTCHA_KEY

// if (typeof RECAPTCHA_KEY === 'undefined') {
//   throw new Error(`
//   Env var GATSBY_APP_SITE_RECAPTCHA_KEY is undefined!
//   You probably forget to set it in your Netlify build environment variables.
//   Make sure to get a Recaptcha key at https://www.netlify.com/docs/form-handling/#custom-recaptcha-2-with-your-own-settings
//   Note this demo is specifically for Recaptcha v2
//   `)
// }

function encode(data) {
	return Object.keys(data)
		.map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&");
}

export default function Index() {
	const [state, setState] = React.useState({});
	// const recaptchaRef = React.createRef()

	const handleChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		// const recaptchaValue = recaptchaRef.current.getValue()
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({
				"form-name": form.getAttribute("name"),
				// 'g-recaptcha-response': recaptchaValue,
				...state,
			}),
		})
			.then(() => navigate(form.getAttribute("action")))
			.catch((error) => alert(error));
	};

	return (
		<Layout>
			<section className="section">
				<div className="container">
					<div className="content">
						<h1>Contact</h1>
						<form
							name="contact"
							method="post"
							action="/contact/thanks/"
							data-netlify="true"
              // data-netlify-recaptcha="true"
              // data-netlify-honeypot="bot-field"
							onSubmit={handleSubmit}
						>
							<div className="field">
								<label className="label">
									Your name:
									<br />
									<input
										className="input"
										type="text"
										name="name"
										onChange={handleChange}
									/>
								</label>
							</div>
							<div className="field">
								<label className="label">
									Your email:
									<br />
									<input
										className="input"
										type="email"
										name="email"
										onChange={handleChange}
									/>
								</label>
							</div>
							<div className="control">
								<label className="label">
									Message:
									<br />
									<textarea
										className="textarea"
										name="message"
										onChange={handleChange}
									/>
								</label>
							</div>
							{/* <Recaptcha ref={recaptchaRef} sitekey={RECAPTCHA_KEY} /> */}
							<div className="field">
								<button style={{ marginTop: "12px" }} className="button is-link" type="submit">
									Send
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>
		</Layout>
	);
}
