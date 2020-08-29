import React, { Component } from 'react';
import './App.css';

import Images from './components/Images'

//import Thumbnails from './components/Thumbnails'

class App extends Component {
	 //set variables
	 state = {
		images: []
	  }
	  //get rest api
	  async componentDidMount() {
		const response = await (await fetch('https://jsonplaceholder.typicode.com/photos/?albumId=1')).json()
		this.setState({
			images: response
		})
	}
	render(){
		return (
			<div id="wrapper">

					<header id="header">
						<div className="inner">

								<a href="/#" className="logo">
									<span className="symbol"><img src="images/logo.svg" alt="" /></span><span className="title">Phantom</span>
								</a>

								{/* <nav>
									<ul>
										<li><a href="#menu">Menu</a></li>
									</ul>
								</nav> */}

						</div>
					</header>

					{/* <nav id="menu">
						<h2>Menu</h2>
						<ul>
							<li><a href="/index.html">Home</a></li>
							<li><a href="/generic.html">Ipsum veroeros</a></li>
							<li><a href="/generic.html">Tempus etiam</a></li>
							<li><a href="/generic.html">Consequat dolor</a></li>
							<li><a href="/elements.html">Elements</a></li>
						</ul>
					</nav> */}

					<div id="main">
						<div className="inner">
							<header>
								<h1>This is Phantom, a free, fully responsive site<br />
								template edited by <a  target="_blank" rel="noopener noreferrer" href="https://github.com/irenteria0617">@ISMAEL</a> designed by <a  target="_blank" rel="noopener noreferrer" href="http://html5up.net">HTML5 UP</a>. </h1>
								<p>Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod sit amet nisi euismod sed cursus arcu elementum ipsum arcu vivamus quis venenatis orci lorem ipsum et magna feugiat veroeros aliquam. Lorem ipsum dolor sit amet nullam dolore.</p>
							</header>
							<Images images={this.state.images} />
						</div>
					</div>

					<footer id="footer">
						<div className="inner">
							<section>
								<h2>Get in touch</h2>
								<form action="/#">
									<div className="fields">
										<div className="field half">
											<input type="text" name="name" id="name" placeholder="Name" />
										</div>
										<div className="field half">
											<input type="email" name="email" id="email" placeholder="Email" />
										</div>
										<div className="field">
											<textarea name="message" id="message" placeholder="Message"></textarea>
										</div>
									</div>
									<ul className="actions">
										<li><input type="submit" value="Send" className="primary" /></li>
									</ul>
								</form>
							</section>
							<section>
								<h2>Follow</h2>
								<ul className="icons">
									<li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/ideas2code" className="icon brands style2 fa-twitter"><span className="label">Twitter</span></a></li>
									<li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/ideas2code/" className="icon brands style2 fa-instagram"><span className="label">Instagram</span></a></li>
									<li><a target="_blank" rel="noopener noreferrer" href="https://github.com/ideas2codeweb" className="icon brands style2 fa-github"><span className="label">GitHub</span></a></li>
									
						
									<li><a target="_blank" rel="noopener noreferrer" href="mailto:hello@ideas2code.io" className="icon solid style2 fa-envelope"><span className="label">Email</span></a></li>
								</ul>
							</section>
							<ul className="copyright">
								<li>&copy; ideas2code.io All rights reserved</li><li>Edited by <a  target="_blank" rel="noopener noreferrer" href="https://github.com/irenteria0617">@ISMAEL</a> Designed by: <a target="_blank" rel="noopener noreferrer" href="http://html5up.net">HTML5 UP</a></li>
							</ul>
						</div>
					</footer>

			</div>
		  );
	}
 
}

export default App;
