import React from 'react';
import logoAdalab from '../imagenes/logo-adalab-80px.png';
class Footer extends React.Component {
	render() {
		return (
			<footer className="footer">
				<p className="footer__copyright">Awesome profile-cards @ 2018</p>
				<div className="footer__logo">
					<a title="Adalab" href='http://adalab.es/'>
						<img className="footer__logo--image" src={logoAdalab} alt="Logo de Adalab en el pie de página"/>
					</a>
				</div>
			</footer>
			);
	}
}

export default Footer;
