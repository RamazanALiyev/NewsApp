import React, { useEffect } from "react";
import "./_eachnews.scss";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import SimiliarNews from "../SimiliarNews/SimiliarNews";
import { MainContext, useContext } from "../../_context";
function Eachnews() {
	const { setCategories, setLoading, detailNews, loading, categories, title, setDetailNews } =
		useContext(MainContext);
	const id = useParams();
	useEffect(() => {
		setLoading(true);
		axios
			.get(`https://inshorts.deta.dev/news?${id.category}`)
			.then((res) => {
				setCategories(res.data);
				setLoading(false);
				setDetailNews(categories.data.find((cat) => cat.title === title))
			})
			.catch(function () {
				toast.error("Error notification!");
			});
	}, []);
	return (
		<div className="EachNews">
			{loading ? (
				<p>loading</p>
			) : (
				<div className="someEachNews">
					<div className="left">
						<img src={detailNews.imageUrl} alt="pic" />
						<div className="fixedTimeUser">
							<span className="time">
								<BiTimeFive className="timeIcon icon" />
								<span>{detailNews.time}</span>
							</span>
							<span className="time">
								<AiOutlineUser className="userIcon icon" />
								<span>{detailNews.author}</span>
							</span>
						</div>
					</div>
					<div className="right">
						<p className="title">{detailNews.title}</p>
						<div className="line"></div>
						<p className="content">{detailNews.content}</p>
					</div>
				</div>
			)}
			{loading ? <p>Loading</p> : <SimiliarNews />}
		</div>
	);
}

export default Eachnews;
