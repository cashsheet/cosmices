import React from "react";
import { navigate } from "gatsby-link";
import * as styles from "../../components/NetlifyForm/NetlifyForm.module.css";
import Layout from "../../components/Layout";
import Recaptcha from "react-google-recaptcha";

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY;
console.log(RECAPTCHA_KEY)
function encode(data) {
	return Object.keys(data)
		.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&");
}
export default class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleRecaptcha = value => {
		this.setState({ "g-recaptcha-response": value });
	};

	handleSubmit = e => {
		e.preventDefault();
		const form = e.target;
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({
				"form-name": form.getAttribute("name"),
				...this.state
			})
		})
			.then(() => navigate(form.getAttribute("action")))
			.catch(error => alert(error));
	};
	render() {
		return (
		<Layout>
			<section className="section">
				<div className="container">
					<div className="content">
						<h1 className={styles.title}>Contact</h1>
						<div className={styles.section}>
							<p>Please don't hesitate to reach out to us.</p>
							<form
								name="Contact Form"
								method="post"
								data-netlify="true"
								data-netlify-recaptcha="true"
								action="/contact/thanks"
								onSubmit={this.handleSubmit}
							>
								<div className="field">
									<label className={styles.label}>
										Your name:<br/>
										<input className={styles.field} type="text" name="name" onChange={this.handleChange}/>
									</label>
								</div>
								<div className="field">
									<label className={styles.label}>
										Your email:<br/>
										<input className={styles.field} type="email" name="email" onChange={this.handleChange}/>
									</label>
								</div>
								<div>
									<label className={styles.label}>
										Message:<br/>
										<textarea className={styles.textarea} name="message" onChange={this.handleChange}/>
									</label>
								</div>
								<Recaptcha
									ref="recaptcha"
									sitekey={RECAPTCHA_KEY}
									onChange={this.handleRecaptcha}
								/>
								<button className="button is-link" type="submit">
									Send
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>
		</Layout>
		);
	}
}