 import React from "react";
 import styles from "./NetlifyForm.module.css";
 import ReCAPTCHA from "react-google-recaptcha";

 const NetlifyForm = () => (
 	<>
 		<div className={styles.section}></div>
 		<div className={styles.container}></div>
 		<h1 className="accent1">#contact</h1>
 		<p style={{ paddingTop: 0, marginTop: -15 }}>
 			Please reach out if there is anything at all! I will do my best to revert
 			back ASAP.
 		</p>
 		<form
 			name="Contact Form"
 			method="POST"
 			data-netlify="true"
 			data-netlify-recaptcha="true"
 		>
 			<input type="hidden" name="form-name" value="Contact Form" />
 			<div className={styles.inputDiv}>
 				<label className={styles.label}>Your Name:</label>
 				<input className={styles.field} type="email" name="email" />
 			</div>
 			<div className={styles.inputDiv}>
 				<label className={styles.label}>Your Email:</label>
 				<input className={styles.field} type="email" name="email" />
 			</div>
 			<div>
 				<label className={styles.label}>Message:</label>
 				<textarea className={styles.textarea} name="message" />
 			</div>
 			<ReCAPTCHA sitekey={process.env.GATSBY_RECAPTCHA_KEY} />
 			<button className={styles.btn} type="submit">
 				Send
 			</button>
 		</form>
 	</>
 );

 export default NetlifyForm;
