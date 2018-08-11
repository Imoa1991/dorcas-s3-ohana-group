import React from 'react';
import LogoAdalab from '../imagenes/logo-adalab-80px.png';
import LogoOhana from '../imagenes/ohana.png';


class Footer extends React.Component {

	render() {

		return (

			<footer className="footer">
				<p className="footer__copyright">Awesome profile-cards @ 2018</p>
				<div className="footer__logo">

					<img className="footer__logo--image footer__logo--image-ohana" src={LogoOhana} alt="Logo de Ohana " />
				</div>
				<div className="footer__logo">
					<a title="Adalab" href="http://adalab.es/">
					<img className="footer__logo--image" src={LogoAdalab} alt="Logo de Adalab" />
				</a>
			</div>
		</footer>
			);
	}
}

export default Footer;
