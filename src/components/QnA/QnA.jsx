import React from "react";
import "./QnA.css";

const QnA = () => {
	return (
		<div className="qna-div">
			<h2 className="qna-heading">JavaScript Basic Question & Answer</h2>
			<div>
				<div className='qna-div'>
					<h4 className='question'>
						1. What are the difference Between Props &State?
					</h4>
					<p className='answer'>
						<ul>
							<li>Props are read-only.State changes can be asynchronous.</li>
							<li>Props are immutable.State is mutable.</li>
							<li>
								Props are used to communicate between components. States can be
								used for rendering dynamic changes with the component.
							</li>
						</ul>
						In summary, props are used to pass data from a parent component to a
						child component, while state is used to manage data within a single
						component.
					</p>
				</div>
				<div className='qna-div'>
					<h4 className='question'>2. How works useState() in react?</h4>
					<p className='answer'>
						Hooks are special functions which let you "hook into" different
						React features. State, being one of its features, is hooked into by
						using the useState React hook. When you call useState, you are
						telling React that you want this component to remember something:
						Every time your component renders, useState gives you an array
						containing two values: The state variable (counter) with the value
						you stored. The state setter function (setCounter) which can update
						the state variable and trigger React to render the component again.
					</p>
				</div>
				<div className='qna-div'>
					<h4 className='question'>
						3.What are the purpose of useEffect other than fetching data?
					</h4>
					<p className='answer'>
						While useEffect is commonly used for fetching data and making API
						requests, it has a broader purpose of managing side effects in
						functional components. In general, a "side effect" is any behavior
						in a component that goes beyond simply rendering UI elements based
						on props and state. For example, side effects can include:
						<ul>
							<li>Fetching data from an API</li>
							<li>Updating the document title</li>
							<li>Adding and removing event listeners</li>
							<li>Setting up and tearing down timers</li>
						</ul>
					</p>
				</div>
				<div className='qna-div'>
					<h4 className='question'>How does React Work?</h4>
					<p className='answer'>React works by using a component-based architecture and a virtual DOM to manage the state and rendering of components. When a component's state changes, React updates the virtual DOM and calculates the differences with the previous virtual DOM, and then updates the actual DOM with only the necessary changes. React also provides lifecycle methods to control the behavior of components at different points in their lifecycle.</p>
				</div>
			</div>
		</div>
	);
};

export default QnA;
