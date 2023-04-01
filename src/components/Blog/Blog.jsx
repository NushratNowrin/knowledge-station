import React from "react";
import "./Blog.css";

const Blog = (props) => {
	const { id, name, date, time, title, img, authorImg } = props.blog;
	return (
		<div className='blog'>
			<img src={img} alt='Study' className='blog-img' />
			<div className='blog-special-info'>
				<div className="blog-special-info-right">
					<img src={authorImg} alt='Author' />
					<div>
						<h4>{name}</h4>
						<small className='smaller-text'>{date}</small>
					</div>
				</div>
				<p className='read-time'>{time} min read</p>
			</div>
		</div>
	);
};

export default Blog;
