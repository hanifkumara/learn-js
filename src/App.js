import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Hanif from './Hanif';
import './App.css';
import Navbar from './component/Navbar';

function App() {
	return (
		<BrowserRouter>
			<Route exact path="/">
				<Navbar />
			</Route>
			<Route path="/about">
				<Navbar />
				<Hanif />
			</Route>
		</BrowserRouter>
	);
}

export default App;
