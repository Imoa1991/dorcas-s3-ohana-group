import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

class Header extends React.Component {
	render() {
		return (
			<header>
				<div className="header__logo">
					<Link to='/'>
						<img className="header__logo--image" src={this.props.logoCards} alt=""/>
					</Link>

				</div>
			</header>
			);
	}
}

export default Header;
