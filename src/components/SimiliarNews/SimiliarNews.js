import React, { useEffect } from "react";
import "./_similiarnews.scss";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { fetchDatas } from "../../features/fetchData.js";
import { useParams } from "react-router-dom";
import BlogItem from "../Skeleton/Skeleton";
import { Link } from "react-router-dom";
function SimiliarNews({ categoryPathname }) {
	const params = useParams();
	const datas = useSelector((state) => state.data);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchDatas(params.category));
	}, [dispatch, params.category]);
	return (
		<div className="SimiliarNews">
			<p className="similiarTitle">Similar news</p>
			{datas.loading && (
				<div className="categories">
					<BlogItem />
					<BlogItem />
					<BlogItem />
				</div>
			)}
			{!datas.loading && datas.error ? <div>Error</div> : null}
			{!datas.loading && datas.datas.data ? (
				<div>
					{datas.datas.data.slice(0, 3).map((data, index) => (
						<Link
							className="link"
							to={`/${categoryPathname.category}/${data.title}`}
							key={index}
						>
							<div className="category">
								<div
									className="bgEffect"
									style={{
										background: `url(${data.imageUrl}), #000`,
									}}
								/>
								<p className="eachCategoryTitle">{data.title}</p>

								<div className="fixedTimeUser">
									<span className="time">
										<BiTimeFive className="timeIcon icon" />
										<span>{data.time}</span>
									</span>
									<span className="time">
										<AiOutlineUser className="userIcon icon" />
										<span>{data.author}</span>
									</span>
								</div>
							</div>
						</Link>
					))}
				</div>
			) : null}
		</div>
	);
}

export default SimiliarNews;
