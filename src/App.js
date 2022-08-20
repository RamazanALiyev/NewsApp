import Background from "./components/Background/Background";
import Home from "./Pages/Home/Home";
import NewsCategory from "./Pages/NewsCategory/Newscategory";
import Eachnews from "./components/EachNews/Eachnews";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import { MainContext } from "./_context";

function App() {
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(true);
	const [value, setValue] = useState("all");
	const [title, setTitle] = useState("");
	const [detailNews, setDetailNews] = useState({});
	const focus = useRef();
	useEffect(() => {
		axios
			.get(`https://inshorts.deta.dev/news?category=${value.toLowerCase()}`)
			.then((res) => {
				setCategories(res.data);
				setLoading(false);
			})
			.catch(function (error) {
				toast.error("Error notification!");
			});
	}, [value]);
	useEffect(() => {
		focus.current.focus();
	}, []);
	const handleFilterNews = (e) => {
		e.preventDefault();
		setLoading(true);
		setValue(e.target.textContent);
	};
	const data = {
		categories,
		setCategories,
		loading,
		setLoading,
		value,
		setValue,
		title,
		setTitle,
		focus,
		handleFilterNews,
		detailNews,
		setDetailNews,
	};
	return (
		<MainContext.Provider value={data}>
			<div className="App">
				<Background />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/:category" element={<NewsCategory />} />
					<Route path="/:category/:id" element={<Eachnews />} />
				</Routes>
			</div>
		</MainContext.Provider>
	);
}
export default App;
