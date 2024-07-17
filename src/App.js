/*декларативный*/
import "./App.css";

import CurrentDate from "./currentDate";
import React from "react";
import logo from "./logo.svg";

/*декларативный*/
/*императивный*/

function App() {
	return React.createElement(
		"div",
		{ className: "App" },
		React.createElement(
			"header",
			{ className: "App-header" },
			React.createElement("img", {
				src: logo,
				className: "App-logo",
				alt: "logo",
			}),
			React.createElement(
				"p",
				null,
				"Edit ",
				React.createElement("code", null, "src/App.js"),
				" and save to reload."
			),
			React.createElement(
				"a",
				{
					className: "App-link",
					href: "https://reactjs.org",
					target: "_blank",
					rel: "noopener noreferrer",
				},
				"Learn React"
			),
			" ",
			React.createElement(CurrentDate, null)
		)
	);
}
/*императивный*/
export default App;
