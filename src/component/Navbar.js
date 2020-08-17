import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<a class="navbar-brand" href="#">
				Navbar
			</a>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav">
					<li class="nav-item active">
						<a class="nav-link" href="#">
							Home <span class="sr-only">(current)</span>
						</a>
					</li>
					<li class="nav-item">
						<Link className="nav-link" to="/about">
							About
						</Link>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">
							Tours
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
