import React from 'react';
import '../styles/Result.css';
import LogoCard from '../imagenes/logo-awesome-profile-cards.svg';
import LogoAdalab from '../imagenes/logo-adalab-80px.png';
import LogoOhana from '../imagenes/ohana.png';
import Loading from '../imagenes/loading.gif';
import Footer from '../components/Footer';

class Result extends React.Component {

  render () {

    return (
      <div className="result__screen">
        <header className="result__header">
          <img className="result__header--logo" src={LogoCard} alt="Logo Awesome profile Cards"/>
        </header>

        <main className="result__main">

          {this.props.finalCardToShare.cardURL === undefined && (

            <div className="result__wait">
              <img src={Loading} alt="Cargando resultado" className="result__wait--img"/>
              <p className="result__wait--txt">La solicitud puede tardar algunos instantes.</p>
            </div>
          )}

          {this.props.finalCardToShare.cardURL !== undefined && (
            <section className="shares">
              <p className="shares__text">La tarjeta ha sido creada:</p>

              <a href={this.props.finalCardToShare.cardURL}>
                <iframe className="result__iframe" src={this.props.finalCardToShare.cardURL}></iframe>
              </a>

              <a className="shares__twitter" type="button" name="button" target="_blank" href={`https://twitter.com/intent/tweet?url='${this.props.finalCardToShare.cardURL}'&text=Mi Awesome Profile-Card: ${this.props.finalCardToShare.cardURL} (powered by Ohana Group / @AdaLab_Digital) &hashtags=WomenInTech,Adalabers`}>
                <i className="fab fa-twitter shares__twitter-logo"></i>
                <p className="shares__twitter-text">Compartir en Twitter</p>
              </a>

              <Footer />

          </section>
        )}

      </main>
    </div>
  );
}

}

export default Result;
