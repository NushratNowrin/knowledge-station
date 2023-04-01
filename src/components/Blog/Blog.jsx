import React from "react";
import "./Blog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const Blog = (props) => {
	const { id, name, date, time, title, img, authorImg } = props.blog;
	return (
		<div className='blog'>
			<img src={img} alt='Study' className='blog-img' />
			<div className='blog-special-info'>
				<div className='blog-special-info-left'>
					<img src={authorImg} alt='Author' />
					<div>
						<h4>{name}</h4>
						<small className='smaller-text'>{date}</small>
					</div>
				</div>
				<div className="blog-special-info-right">
					<p className='read-time'>{time} min read</p>
					<button className="different-btn">
						<FontAwesomeIcon icon={faBookmark} />
					</button>
				</div>
			</div>
            <h2 className="blog-title">{title}</h2>
            <small className="smaller-text">#beginners &nbsp; #programming</small><br /><br />
            <button className="different-btn read-btn">
                <a href="">Mark as read</a>
            </button>
		</div>
	);
};

export default Blog;
