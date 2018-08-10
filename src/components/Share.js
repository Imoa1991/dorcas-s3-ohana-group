import React from 'react';

class Share extends React.Component {
  render() {
    return (
      <section className="dropdown__third collapsible">
      <div className="border">
        <div className="dropdown__fill collapsible__label">
          <div className="dropdown__fill--name">
            <div className="">
              <i className="fas fa-share-alt dropdown__fill--nameIcon"></i>
            </div>
            <h2 className="dropdown__fill--nameText ">Comparte</h2>
          </div>
          <span className="arrow">
            <i className="fas fa-angle-up" onClick={this.props.generateJsonToShare}></i>
          </span>
        </div>
        <div className="shares__input--buttonandminiimg">
          <button className="shares__input--addimgbutton collapsible__content" onClick={this.props.generateCardToShare}>
            <i className="far fa-address-card"></i>Crear tarjeta</button>
        </div>
        <div className="loader collapsible__content hidden">Loading...</div>
        <section className="shares collapsible__content hidden">
          <div className="bookmark"></div>
          <p className="shares__text">La tarjeta ha sido creada:</p>
          <a className="shares__url" href="#" target="_blank">"https://awesome-profile-card.com?id=A456DF0001"</a>
          <a className="shares__twitter" type="button" name="button" target="_blank">
            <i className="fab fa-twitter shares__twitter-logo"></i>
            <p className="shares__twitter-text">Compartir en Twitter</p>
          </a>
          <div className="bookmark"></div>
        </section>
      </div>
      </section>
      );
  }
}

export default Share;
