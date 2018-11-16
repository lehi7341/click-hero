//sets up the reusable Jumbotron component
import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
	<header className = "header">
		<h1>Click Hero Game!</h1>
		<h2>Click on any hero to earn a point, but don't click on the same hero more than once. Click all 12 heroes, and you win.</h2>
	</header>
);

export default Jumbotron;