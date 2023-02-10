import React from "react";
import Wave from "react-wavify";

function WaveAnimation({ fillColor, isMobile }) {
	return (
		<Wave
			mask="url(#mask)"
			fill={fillColor}
			options={{
				height: 40,
				amplitude: 20,
				speed: 0.35,
				points: isMobile ? 2 : 7,
			}}
		>
			<defs>
				<linearGradient id="gradient" gradientTransform="rotate(90)">
					<stop offset="0" stopColor="black" />
					<stop offset="0.5" stopColor="white" />
				</linearGradient>
				<mask id="mask">
					<rect
						x="0"
						y="0"
						width="100%"
						height="200"
						fill="url(#gradient)"
					/>
				</mask>
			</defs>
		</Wave>
	);
}

export default WaveAnimation;
