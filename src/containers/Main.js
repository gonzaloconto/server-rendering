import React from "react";
import InlineCss from "react-inline-css";

import favicon from "favicon.ico";


/**
 * Main React application entry-point for both the server and client.
 */
export default class Main extends React.Component {
	/**
	 * componentWillMount() runs on server and client.
	 */
	componentWillMount () {
		if (__SERVER__) {
			console.log("Hello server");
		}

		if (__CLIENT__) {
			console.log("Hello client");
		}
	}

	/**
	 * componentDidUpdate() only runs on the client.
	 */
	componentDidUpdate (prevProps, prevState) {
	}

	/**
	 * Runs on server and client.
	 */
	render () {
		const repositoryUrl = "https://github.com/RickWong/react-isomorphic-starterkit";
		const avatarSize    = 32;
		const avatarUrl     = (id) => `https://avatars.githubusercontent.com/u/${id}?v=3&s=${avatarSize}`;

		/**
		 * This is a Transmit fragment.
		 */
		let {stargazers, additionalStargazers} = this.props;

		if (additionalStargazers) {
			stargazers = stargazers.concat(additionalStargazers);
		}

		return (
            <InlineCss stylesheet={Main.css(avatarSize)} namespace="Main">
				<nav class="" role="navigation">
					<div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo">
						<img src="images/logo.png" alt="" />
					</a>
						<ul class="right hide-on-med-and-down">
							<li><a href="#">Channels</a></li>
							<li><a href="#">Questions</a></li>
						</ul>

						<ul id="nav-mobile" class="side-nav">
							<li><a href="#">Channels</a></li>
							<li><a href="#">Questions</a></li>
						</ul>
						<a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
					</div>
				</nav>

				<div class="section no-pad-bot" id="index-banner">
					<div class="container">
						<div class="row">
							<div class="col s12 m6 l4">
								<div class="card medium">
									<div class="card-header">
										<img src="images/cosmos-avatar.jpg" class="avatar" alt="" />
											<h6 class="name">Cosmos</h6>
											<p class="id-label">ID: 42</p>
											<div class="status-icon published">
												<i class="material-icons published">check_circle</i>
											</div>
									</div>
									<div class="card-image">
										<img src="images/cosmos.jpg" />
									</div>
									<div class="card-content">
										<div class="follow-count">
											<i class="material-icons tiny">star_rate</i>
											<span class="followers">11237 Followers</span>
										</div>
										<p>Channel description.</p>
									</div>
									<div class="card-owner">
										<p class="owner">Owned by: Neil deGrasse Tyson</p>
									</div>
									<div class="card-action">
										<span>Languages:</span>
										<div class="single-badges">
											<img src="" alt="" class="flag flag-es" />
												ES
										</div>
										<a href="" class="settings">
											<i class="material-icons">settings</i>
										</a>
									</div>
								</div>
							</div>
							<div class="col s12 m6 l4">
								<div class="card medium">
									<div class="card-header">
										<img src="images/bttf.jpg" class="avatar" alt="" />
											<h6 class="name">Back to the Future</h6>
											<p class="id-label">ID: 1524</p>
											<div class="status-icon published">
												<i class="material-icons">check_circle</i>
											</div>
									</div>
									<div class="card-image">
										<img src="images/delorean.jpg" />
									</div>
									<div class="card-content">
										<div class="follow-count">
											<i class="material-icons tiny">star_rate</i>
											<span class="followers">22000 Followers</span>
										</div>
										<p>The Back to the Future channel.</p>
									</div>
									<div class="card-owner">
										<p class="owner">Owned by: Marty McFly</p>
									</div>
									<div class="card-action">
										<span>Languages:</span>
										<div class="single-badges">
											<img src="" alt="" class="flag flag-us" />
												EN
										</div>
										<a href="" class="settings">
											<i class="material-icons">settings</i>
										</a>
									</div>
								</div>
							</div>
							<div class="col s12 m6 l4">
								<div class="card medium">
									<div class="card-header">
										<img src="images/literaavat.jpg" class="avatar" alt="" />
											<h6 class="name">Literatura</h6>
											<p class="id-label">ID: 2500</p>
											<div class="status-icon disabled">
												<i class="material-icons disabled">error</i>
											</div>
									</div>
									<div class="card-image">
										<img src="images/litera.jpg" />
									</div>
									<div class="card-content">
										<div class="follow-count">
											<i class="material-icons tiny">star_rate</i>
											<span class="followers">1537 Followers</span>
										</div>
										<p>The Back to the Future channel.</p>
									</div>
									<div class="card-owner">
										<p class="owner">Owned by: Borges</p>
									</div>
									<div class="card-action">
										<span>Languages:</span>
										<div class="single-badges">
											<img src="" alt="" class="flag flag-us" />
												EN
										</div>
										<a href="" class="settings">
											<i class="material-icons">settings</i>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col s12 m6 l4">
								<div class="card medium">
									<div class="card-header">
										<img src="images/dotaavat.jpg" class="avatar" alt="" />
											<h6 class="name">Dota 2</h6>
											<p class="id-label">ID: 2500</p>
											<div class="status-icon published">
												<i class="material-icons">check_circle</i>
											</div>
									</div>
									<div class="card-image">
										<img src="images/dota-2-official_1.jpg" />
									</div>
									<div class="card-content">
										<div class="follow-count">
											<i class="material-icons tiny">star_rate</i>
											<span class="followers">1920 Followers</span>
										</div>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus reiciendis sed dignissimos ratione atque.</p>
									</div>
									<div class="card-owner">
										<p class="owner">Owned by: Gabe Newell</p>
									</div>
									<div class="card-action">
										<span>Languages:</span>
										<div class="single-badges">
											<img src="" alt="" class="flag flag-ar" />
												AR
										</div>
										<a href="" class="settings">
											<i class="material-icons">settings</i>
										</a>
									</div>
								</div>
							</div>
							<div class="col s12 m6 l4">
								<div class="card medium">
									<div class="card-header">
										<img src="images/lotravatar.jpg" class="avatar" alt="" />
											<h6 class="name">Lord of the Rings</h6>
											<p class="id-label">ID: 2500</p>
											<div class="status-icon published">
												<i class="material-icons">check_circle</i>
											</div>
									</div>
									<div class="card-image">
										<img src="images/lotr.jpg" />
									</div>
									<div class="card-content">
										<div class="follow-count">
											<i class="material-icons tiny">star_rate</i>
											<span class="followers">590 Followers</span>
										</div>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus reiciendis sed dignissimos ratione atque.</p>
									</div>
									<div class="card-owner">
										<p class="owner">Owned by: Gandalf The Grey</p>
									</div>
									<div class="card-action">
										<span>Languages:</span>
										<div class="single-badges">
											<img src="" alt="" class="flag flag-us" />
												EN
										</div>
										<a href="" class="settings">
											<i class="material-icons">settings</i>
										</a>
									</div>
								</div>
							</div>
							<div class="col s12 m6 l4">
								<div class="card medium">
									<div class="card-header">
										<img src="images/barcaavat.jpg" class="avatar" alt="" />
											<h6 class="name">Barcelona</h6>
											<p class="id-label">ID: 2500</p>
											<div class="status-icon published">
												<i class="material-icons">check_circle</i>
											</div>
									</div>
									<div class="card-image">
										<img src="images/barca.jpg" />
									</div>
									<div class="card-content">
										<div class="follow-count">
											<i class="material-icons tiny">star_rate</i>
											<span class="followers">13000 Followers</span>
										</div>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus reiciendis sed dignissimos ratione atque.</p>
									</div>
									<div class="card-owner">
										<p class="owner">Owned by: Messi</p>
									</div>
									<div class="card-action">
										<span>Languages:</span>
										<div class="single-badges">
											<img src="" alt="" class="flag flag-us" />
												EN
										</div>
										<a href="" class="settings">
											<i class="material-icons">settings</i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="container">
					<div class="section">
					</div>
				</div>
			</InlineCss>
		);
	}
	/**
	 * <InlineCss> component allows you to write a CSS stylesheet for your component. Target
	 * your component with `&` and its children with `& selectors`. Be specific.
	 */
	static css (avatarSize) {
		return (`
			& .github {
				position: absolute;
				top: 0;
				right: 0;
				border: 0;
			}
			& {
				font-family: sans-serif;
				color: #0df;
				padding: 10px 30px 30px;
				width: 443px;
				margin: 10px auto;
				background: #222;
			}
		`);
	}
}
