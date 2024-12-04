import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const FeatureGrid = ({ gridItems }) => (
	<div className="columns is-multiline">
		{gridItems.map((item) => (
			<div key={item.text} className="column is-6">
				<section
          className="section" style={{ paddingBottom: 0 }}
          
					
				>
					<div className="has-text-centered" style={{
						display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "430px"
					}} >
						<div
							style={{
                width: "200px",
                height: "200px",
                overflow: "hidden",
                display: "inline-block",
                objectFit: "contain",
								flex: 1,
							}}
						>
							<PreviewCompatibleImage imageInfo={item} />
						</div>
						<div style={{ flex: 1, maxWidth: "400px" }}>
							<p>{item.text}</p>
						</div>
					</div>
				</section>
			</div>
		))}
	</div>
);

FeatureGrid.propTypes = {
	gridItems: PropTypes.arrayOf(
		PropTypes.shape({
			image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
			text: PropTypes.string,
		})
	),
};

export default FeatureGrid;
