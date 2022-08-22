/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import "./_eachnews.scss";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import SimiliarNews from "../SimiliarNews/SimiliarNews";
import { useParams } from "react-router-dom";
import axios from "axios";
import SkeletonDetail from "../SkeletonDetail/SkeletonDetail";
function Eachnews() {
	const [totalNewsDeatil, setTotalNewsDeatil] = useState("");
	const [findArr, setFindArr] = useState("");
	const categoryPathname = useParams();
	useEffect(() => {
		axios
			.get(`https://inshorts.deta.dev/news?${categoryPathname.category}`)
			.then((response) => setTotalNewsDeatil(response.data));
	}, [categoryPathname.category]);
	useEffect(() => {
		const find = totalNewsDeatil?.data?.find(
			(dat) => dat.title === categoryPathname.title
		);
		setFindArr(find);
		console.log("sssd", findArr);
	}, [categoryPathname.title, findArr, totalNewsDeatil]);

	return (
		<div className="EachNews">
			{findArr === undefined ? (
				<SkeletonDetail />
			) : (
				<div className="someEachNews">
					<div className="left">
						<img src={findArr?.imageUrl} alt="pic" />
						<div className="fixedTimeUser">
							<span className="time">
								<BiTimeFive className="timeIcon icon" />
								<span>{findArr?.time}</span>
							</span>
							<span className="time">
								<AiOutlineUser className="userIcon icon" />
								<span>{findArr?.author}</span>
							</span>
						</div>
					</div>
					<div className="right">
						<p className="title">{findArr?.title}</p>
						<div className="line"></div>
						<p className="content">{findArr?.content}</p>
					</div>
				</div>
			)}
			<SimiliarNews categoryPathname={categoryPathname} />
		</div>
	);
}
export default Eachnews;
