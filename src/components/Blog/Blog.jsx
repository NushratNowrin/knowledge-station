import React from "react";
import "./Blog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blog = (props) => {
	const { id, name, date, time, title, img, authorImg } = props.blog;
	const handleBookmark = props.handleBookmark;
	const handleMarkAsRead = props.handleMarkAsRead;
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
					<button className="different-btn" onClick={() => handleBookmark(props.blog)}>
						<FontAwesomeIcon icon={faBookmark} />
					</button>
					<ToastContainer />
				</div>
			</div>
            <h2 className="blog-title">{title}</h2>
            <small className="smaller-text">#beginners &nbsp; #programming</small><br /><br />
            <button className="different-btn read-btn" onClick= { () => handleMarkAsRead(time)}>
                Mark as read
            </button>
		</div>
	);
};

export default Blog;
