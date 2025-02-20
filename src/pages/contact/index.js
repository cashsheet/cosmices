import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import * as styles from "../../components/NetlifyForm/NetlifyForm.module.css";
import Layout from "../../components/Layout";

const Index = () => (
	<>
		<Layout>
			<section className="section">
				<div className="container">
					<div className="content">
					<h1 className={styles.title}>Contact</h1>
					<div className={styles.section}>
							<p >
								Please don't hesitate to reach out to us.
							</p>
						<form
							name="Contact Form"
							method="POST"
							data-netlify="true"
							data-netlify-recaptcha="true"
							action="https://cosmices.com/contact/thanks/"
							netlify-honeypot="bot-field"
						>
							<input type="hidden" name="bot-field"/>
							<input type="hidden" name="form-name" value="Contact Form"/>
							<div className="field">
								<label className={styles.label}>Your Name:</label>
								<input className={styles.field} type="text" name="name"/>
							</div>
							<div className="field">
								<label className={styles.label}>Your Email:</label>
								<input className={styles.field} type="email" name="email"/>
							</div>
							<div>
								<label className={styles.label}>Message:</label>
								<textarea className={styles.textarea} name="message"/>
							</div>
							<ReCAPTCHA sitekey={process.env.GATSBY_RECAPTCHA_KEY}/>
							<button className="button is-link" type="submit">
								Send
							</button>
						</form>
					</div>
					</div>
				</div>
			</section>
		</Layout>
	</>
);

export default Index;
