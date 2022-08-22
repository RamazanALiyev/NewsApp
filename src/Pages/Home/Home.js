import React from "react";
import "./_home.scss";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineUser, AiFillEye } from "react-icons/ai";
import BlogItem from "../../components/Skeleton/Skeleton";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useContext, MainContext } from "../../_context";

function Home() {
	const { datas } = useContext(MainContext);
	return (
		<div className="Home">
			<Toaster position="top-right" />
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
							className="link"
							key={index}
							to={`/category=all/${category.id}`}
						>
							<div className="category">
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
export default Home;
