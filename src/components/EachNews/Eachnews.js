import React, { useEffect } from "react";
import "./_eachnews.scss";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import SimiliarNews from "../SimiliarNews/SimiliarNews";
import { MainContext, useContext } from "../../_context";
import BlogItem from "../Skeleton/Skeleton";
function Eachnews() {
	const {
		setCategories,
		setLoading,
		categories,
		loading,
		detailNews,
		setDetailNews,
	} = useContext(MainContext);
	const id = useParams();
	useEffect(() => {
		setLoading(true);
		axios
			.get(`https://inshorts.deta.dev/news?${id.category}`)
			.then((res) => {
				setCategories(res.data);
				setLoading(false);
				setDetailNews(categories.data.find((categ) => categ.title === id.id));
				console.log("main", detailNews);
			})
			.catch(function (error) {
				toast.error("Error notification!");
			});
	}, []);
	return (
		<div className="EachNews">
			{detailNews !== undefined && detailNews.author && (
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
			<SimiliarNews categories={categories} />
		</div>
	);
}

export default Eachnews;
