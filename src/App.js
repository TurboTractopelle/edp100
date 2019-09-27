import React from "react";
import "./assets/edp100.scss";
import Intro from "./components/Intro";
import Section from "./hoc/Section";
import TimelineHistory from "./components/TimelineHistory/TimelineHistory";

function App() {
	return (
		<div className="App">
			<Intro />
			<Section id="timeline" title="Timeline">
				<TimelineHistory />
			</Section>
			<Section id="history" title="History" />
			<Section id="event-details" title="Event details" />
			<Section id="advisory" title="Advisory" />
			<Section id="4open" title="4open" />
			<Section id="video" title="video" />
			<Section id="archive" title="archive" />
			<Section id="ppt" title="ppt" />
			<Section id="photos" title="photos" />
			<Section id="quiz" title="quiz" />
			<Section id="memories" title="memories" />
			<Section id="series" title="series" />
		</div>
	);
}

export default App;
