import React, { useEffect } from "react";
import "./_newscategory.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineUser, AiFillEye } from "react-icons/ai";
import BlogItem from "../../components/Skeleton/Skeleton";
import { useContext, MainContext } from "../../_context";

function Newscategory() {
	const { setCategories, categories, loading, setLoading, title, setTitle } =
		useContext(MainContext);
	const categoryPathname = useParams();
	useEffect(() => {
		axios
			.get(`https://inshorts.deta.dev/news?${categoryPathname.category}`)
			.then((res) => {
				setCategories(res.data);
				setLoading(false);
			})
			.catch(function (error) {
				toast.error("Error notification!");
			});
		console.log(categories);
	}, []);
	return (
		<div className="Newscategory">
			{loading ? (
				<div className="categories">
					<BlogItem />
					<BlogItem />
					<BlogItem />
				</div>
			) : (
				<div className="categories">
					{categories.data.map((category, index) => (
						<Link
							onClick={() => setTitle(category.title)}
							className="link"
							key={index}
							to={`/${categoryPathname.category}/${title}`}
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
			)}
		</div>
	);
}

export default Newscategory;
