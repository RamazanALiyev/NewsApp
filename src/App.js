import React, { useEffect } from "react";
import Background from "./components/Background/Background";
import Home from "./Pages/Home/Home";
import NewsCategory from "./Pages/NewsCategory/Newscategory";
import Eachnews from "./components/EachNews/Eachnews";
import { Routes, Route } from "react-router-dom";
import { MainContext } from "./_context";
import { useSelector, useDispatch } from "react-redux";
import { fetchDatas } from "./features/fetchData";
function App() {
	const datas = useSelector((state) => state.data);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchDatas("category=all"));
	}, [dispatch]);
	const dataContext = {
		datas,
	};
	return (
		<MainContext.Provider value={dataContext}>
			<div className="App">
				<Background />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/:category" element={<NewsCategory />} />
					<Route path="/:category/:title" element={<Eachnews />} />
				</Routes>
			</div>
		</MainContext.Provider>
	);
}
export default App;
