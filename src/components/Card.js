import React from 'react';
import Reset from './Reset';

class Card extends React.Component {
  render(){
    return (
        <section className="main__card">
          <section id="viewfinder-id" className="viewfinder viewfinder--blue comic view">
            <div className="viewfinder__card">
              <div className="viewfinder__card-title">
                <div className="viewfinder__card-title-rectangule"></div>
                <div className="viewfinder__card-titlebox">
                  <h2 className="viewfinder__card-title-name" id="element-name">Nombre Apellidos</h2>
                  <h3 className="viewfinder__card-title-job" id="element-job">Front-end developer</h3>
                </div>
              </div>
              <div className="viewfinder__photo">
              </div>
              <div className="viewfinder__icons">
                <div className="viewfinder__icons-box mobileicon">
                  <a id="element-phone" href="" className="viewfinder__icons--links mobilelink" target="_blank">
                    <i className="fas fa-mobile-alt"></i>
                  </a>
                </div>
                <div className="viewfinder__icons-box emailicon">
                  <a id="element-mail" href="" className="viewfinder__icons--links emaillink" target="_blank">
                    <i className="far fa-envelope"></i>
                  </a>
                </div>
                <div className="viewfinder__icons-box linkedinicon">
                  <a id="element-linkedin" href="" className="viewfinder__icons--links linkedinlink" target="_blank">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
                <div className="viewfinder__icons-box githubicon">
                  <a id="element-github" href="" className="viewfinder__icons--links githublink" target="_blank">
                    <i className="fab fa-github-alt"></i>
                  </a>
                </div>
              </div>
              <div className="viewfinder__tags">
                <div className="viewfinder__tags-text">
                  <p className="skilltext"></p>
                </div>
                <div className="viewfinder__tags-text">
                  <p className="skilltext"></p>
                </div>
                <div className="viewfinder__tags-text">
                  <p className="skilltext"></p>
                </div>
              </div>
                <Reset />
            </div>
          </section>
        </section>

      );
  }
}

export default Card;
