import React from "react";
import "./_background.scss";
import { NavLink } from "react-router-dom";
import { MainContext, useContext } from "../../_context";

function Background() {
	const { datas } = useContext(MainContext);
	return (
		<div className="Background">
			<p className="title">News</p>
			<div className="categoriesTitle">
				<button disabled={datas.loading ? true : false} className="categorieTitle">
					<NavLink className="link" to="/category=all">
						All
					</NavLink>
				</button>
				<button disabled={datas.loading ? true : false} className="categorieTitle">
					<NavLink className="link" to="/category=business">
						Business
					</NavLink>
				</button>
				<button disabled={datas.loading ? true : false} className="categorieTitle">
					<NavLink className="link" to="/category=sports">
						Sports
					</NavLink>
				</button>
				<button disabled={datas.loading ? true : false} className="categorieTitle">
					<NavLink className="link" to="/category=world">
						World
					</NavLink>
				</button>
				<button disabled={datas.loading ? true : false} className="categorieTitle">
					<NavLink className="link" to="/category=technology">
						Technology
					</NavLink>
				</button>
				<button disabled={datas.loading ? true : false} className="categorieTitle">
					<NavLink className="link" to="/category=entertainment">
						Entertainment
					</NavLink>
				</button>
				<button disabled={datas.loading ? true : false} className="categorieTitle">
					<NavLink className="link" to="/category=science">
						Science
					</NavLink>
				</button>
			</div>
		</div>
	);
}

export default Background;
