import React from 'react';
import {Link} from 'react-router-dom';
import Result from './Result';

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
              <i className="fas fa-angle-down icon--arrow"></i>
            </span>
          </div>
          <div className="shares__input--buttonandminiimg collapsible__content">
              <button className={`shares__input--addimgbutton collapsible__content ${this.props.readyToShare && "shares__link--button"}`} onClick={this.props.generateCardToShare}>
                <i className="far fa-address-card"></i>Crear tarjeta</button>

              </div>
            </div>
            <div className="border">
              <Result
                   finalCardToShare={this.props.finalCardToShare}
                   generateCardClicked={this.props.generateCardClicked}
              />
            </div>
          </section>
        );
      }
    }

    export default Share;
