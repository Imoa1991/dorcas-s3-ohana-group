import React from 'react';
import {Link} from 'react-router-dom';

class Share extends React.Component {
  render() {
    return (
      <section className={`dropdown__third collapsible ${this.props.share_colapsed}`}>
        <div className="border">
          <div onClick={this.props.clickShare} className="dropdown__fill collapsible__label">
            <div className="dropdown__fill--name">
              <div className="">
                <i className="fas fa-share-alt dropdown__fill--nameIcon"></i>
              </div>
              <h2 className="dropdown__fill--nameText ">Comparte</h2>
            </div>
            <span className="arrow">
              <i className="fas fa-angle-up"></i>
            </span>
          </div>
          <div className="shares__input--buttonandminiimg">
            <Link to='/Result'>
            <button className="shares__input--addimgbutton collapsible__content" onMouseOver={this.props.generateJsonToShare} onClick={this.props.generateCardToShare}>
              <i className="far fa-address-card"></i>Crear tarjeta</button>
            </Link>
          </div>
        </div>
      </section>
  );
}
}

export default Share;
