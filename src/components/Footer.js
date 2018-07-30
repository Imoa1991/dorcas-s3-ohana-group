import React from 'react';

class Footer extends React.Component {
	render() {
		return (
			<footer className="footer">
				<p className="footer__copyright">{this.props.copy}</p>
				<div className="footer__logo">
					<a title="Adalab" href={this.props.url}>
						<img className="footer__logo--image" src={this.props.logoAdalab} alt="Logo de Adalab en el pie de página"/>
					</a>
				</div>
			</footer>
			);
	}
}

export default Footer;
