import React from "react";
import Layout from "../../components/Layout";
import Link from "gatsby-link"

export default () => (
	<Layout>
		<section className="section">
			<div className="container">
				<div className="content">
					<div
          style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          height: "50vh"
          }}
          >

						<h1 style={{ fontSize: "30px" }} >Thank you!</h1>
						<p style={{ fontSize: "20px" }}>We will get back to you shortly.</p>
            <Link to="/">Go Back</Link>

					</div>
				</div>
			</div>
		</section>
	</Layout>
);
