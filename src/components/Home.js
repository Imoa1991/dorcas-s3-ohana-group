import React from 'react';
import LogoCard from '../imagenes/logo-awesome-profile-cards.svg';
import LogoAdalab from '../imagenes/logo-adalab-80px.png';
import { Link, Route, Switch } from 'react-router-dom';

class Home extends React.Component {
    render() {
    return(
        <React.Fragment>
            <main className="main">
                <header className="main__header">
                    <div className="main__header--logo">
                    <img src={LogoCard} alt="Logo Awesome profile Cards"/>
                    </div>
                </header>
                <section className="main__intro">
                    <h1 className="main__title">Crea tu tarjeta de visita</h1>
                    <p className="main__paragraph">Crea mejores contactos profesionales de forma fácil y cómoda</p>
                    <ul className="main__list">
                        <li className="main__list-item">
                            <i className="far fa-object-ungroup icon"></i>
                            <div className="main__list--text">Diseña</div>
                        </li>
                        <li className="main__list-item">
                            <i className="far fa-keyboard icon"></i>
                            <div className="main__list--text">Rellena</div>
                        </li>
                        <li className="main__list-item">
                            <i className="fas fa-share-alt icon"></i>
                            <div className="main__list--text">Comparte</div>
                        </li>
                    </ul>
                    <div className="main__button">
                        <a href="card.html">
                            <Link to='/Page'>
                              <button type="button" name="button" className="main__button--start">Comenzar</button>
                            </Link>
                        </a>
                    </div>
                </section>
            </main>
            <footer className="footer">
                <p className="footer__copyright">Awesome profile-cards @ 2018</p>
                <div className="footer__logo">
                    <a title="Adalab" href="http://adalab.es/">
                        <img className="footer__logo--image" src={LogoAdalab} alt="Logo de Adalab en el pie de página" />
                    </a>
                </div>
            </footer>
        </React.Fragment>
    );
  }
}

export default Home;
