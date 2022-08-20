import React from "react";
import "./_similiarnews.scss";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";

function SimiliarNews({ categories }) {
	return (
		<div className="SimiliarNews">
			<p className="similiarTitle">Similar news</p>
			<div>
				{categories.data.slice(0, 3).map((category, index) => (
					<div key={index} className="category">
						<div
							className="bgEffect"
							style={{
								background: `url(${category.imageUrl}), #000`,
							}}
						/>
						<p className="eachCategoryTitle">{category.title}</p>

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
				))}
			</div>
		</div>
	);
}

export default SimiliarNews;
