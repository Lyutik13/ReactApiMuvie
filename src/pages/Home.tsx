import React from "react";
import AppContext from "../context";

import CartItem from "../components/CartItem/CartItem";

export const Home = () => {
	const { items, isLoading } = React.useContext(AppContext);

	return (
		<>
			<section className="muvie">
				<h2>Фильмы</h2>
				<div className="contentWrapper">
					<aside className="filterWrapper"></aside>
					<section className="cardsWrapper">
						{items.map((item) => (<CartItem key={item.id} {...item} />))}
					</section>
				</div>
			</section>
		</>
	);
};

export default Home;
