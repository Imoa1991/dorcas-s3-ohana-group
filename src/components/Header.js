import React from 'react';

class Header extends React.Component {
	render() {
		return (
			<header>
				<div className="header__logo">
					<img className="header__logo--image" src={this.props.logoCards} alt=""/>
				</div>
			</header>
			);
	}
}

export default Header;
