import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./_newscategory.scss";
import { Link } from "react-router-dom";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineUser, AiFillEye } from "react-icons/ai";
import BlogItem from "../../components/Skeleton/Skeleton";
import { fetchDatas } from "../../features/fetchData";
import { useSelector, useDispatch } from "react-redux/es/exports";
function Newscategory() {
	const categoryPathname = useParams();
	const datas = useSelector((state) => state.data);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchDatas(categoryPathname.category));
	}, [dispatch, categoryPathname.category]);
	return (
		<div className="Newscategory">
			{datas.loading && (
				<div className="categories">
					<BlogItem />
					<BlogItem />
					<BlogItem />
				</div>
			)}
			{!datas.loading && datas.error ? <div>Error</div> : null}
			{!datas.loading && datas.datas.data ? (
				<div className="categories">
					{datas.datas.data.map((category, index) => (
						<Link
							to={`/${categoryPathname.category}/${category.title}`}
							className="link"
							key={index}
						>
							<div
								className="category"
							>
								<AiFillEye className="preViewIcon" />
								<img src={category.imageUrl} alt="pic" />
								<p className="eachCategoryTitle">{category.title}</p>
								<div className="line"></div>
								<p className="content">{category.content}</p>
								<div className="fixedTimeUser">
									<span className="time">
										<BiTimeFive className="timeIcon icon" />
										<span>{category.time}</span>
									</span>
									<span className="time">
										<AiOutlineUser className="userIcon icon" />
										<span>{category.author}</span>
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

export default Newscategory;
