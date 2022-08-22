/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import "./_eachnews.scss";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import SimiliarNews from "../SimiliarNews/SimiliarNews";
// import { MainContext, useContext } from "../../_context";
import { useParams } from "react-router-dom";
import axios from "axios";
function Eachnews() {
	const [totalNewsDeatil, setTotalNewsDeatil] = useState("");
	// const { curId } = useContext(MainContext);
	const categoryPathname = useParams();
	useEffect(() => {
		axios
			.get(`https://inshorts.deta.dev/news?${categoryPathname.category}`)
			.then((response) => setTotalNewsDeatil(response.data));
	}, [categoryPathname]);

	useEffect(() => {
		console.log(totalNewsDeatil);
	}, []);

	return (
		<div className="EachNews">
			<div className="someEachNews">
				<div className="left">
					<img src={totalNewsDeatil?.data?.[0]?.imageUrl} alt="pic" />
					<div className="fixedTimeUser">
						<span className="time">
							<BiTimeFive className="timeIcon icon" />
							<span>{totalNewsDeatil?.data?.[0]?.time}</span>
						</span>
						<span className="time">
							<AiOutlineUser className="userIcon icon" />
							<span>{totalNewsDeatil?.data?.[0]?.author}</span>
						</span>
					</div>
				</div>
				<div className="right">
					<p className="title">{totalNewsDeatil?.data?.[0]?.title}</p>
					<div className="line"></div>
					<p className="content">{totalNewsDeatil?.data?.[0]?.content}</p>
				</div>
			</div>
			<SimiliarNews />
		</div>
	);
}
export default Eachnews;
