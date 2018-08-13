import React from 'react';
import '../styles/Result.css';
import LogoCard from '../imagenes/logo-awesome-profile-cards.svg';
import LogoAdalab from '../imagenes/logo-adalab-80px.png';
import LogoOhana from '../imagenes/ohana.png';
import Loading from '../imagenes/loading.gif';
import Footer from '../components/Footer';


const waitMusic = new Audio('http://freesound.org/data/previews/398/398328_3340187-lq.mp3');


class Result extends React.Component {


  // componentDidMount() {
  // waitMusic.play();
  //
  // }
  //
  // waitMusicStop() {
  // waitMusic.pause();
  // waitMusic.currentTime = 0;
  // }

  render () {

    return (
      <div className="result__screen">

        {this.props.generateCardClicked && this.props.finalCardToShare.cardURL === undefined && (
          <div className="result__wait">
            <img src={Loading} alt="Cargando resultado" className="result__wait--img"/>
            <p className="result__wait--txt">La solicitud puede tardar algunos instantes.</p>
          </div>
        )}

        {this.props.finalCardToShare.cardURL !== undefined && (
          <section className="shares">
            <p className="shares__text">La tarjeta ha sido creada:</p>

            <a href={this.props.finalCardToShare.cardURL}  className="shares__url" target="_blank">
              <p>{this.props.finalCardToShare.cardURL}</p>
            </a>

            <a className="shares__twitter" type="button" name="button" target="_blank" href={`https://twitter.com/intent/tweet?url='${this.props.finalCardToShare.cardURL}'&text=My Awesome Profile-Card: ${this.props.finalCardToShare.cardURL} (powered by Ohana Group / @AdaLab_Digital) &hashtags=WomenInTech,Adalabers`}>
            <i className="fab fa-twitter shares__twitter-logo"></i>
            <p className="shares__twitter-text">Compartir en Twitter</p>
          </a>

        </section>
      )}
    </div>
  );
}

}

export default Result;
