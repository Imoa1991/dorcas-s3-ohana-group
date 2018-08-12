import React from 'react';

class Design extends React.Component {
  render() {

    return (
      <section className={`dropdown__first collapsible ${this.props.design_colapsed}`}>
        <div className="border">
          <div onClick={this.props.clickDesign} className="dropdown__desing collapsible__label">
            <div className="dropdown__desing--name">
              <div className="">
                <i className="far fa-object-ungroup dropdown__desing--nameIcon"></i>
              </div>
              <h2 className="dropdown__desing--nameText">Diseña</h2>
            </div>
            <span className="arrow">
              <i className="fas fa-angle-up"></i>
            </span>
          </div>
          <div className="collapsible__content">
            <div className="dropdown__colors">
              <div className="dropdown__title">
                <h3>Colores</h3>
              </div>
              <div className="">
                <div className="dropdown__colors--selectors" action="index.html" method="post">
                  <div className="dropdown__colorsgroups radiosGroup">
                    <label className="colors-container" htmlFor="blue">
                      <div className="colors__darkCyan colors"></div>
                      <div className="colors__dirtyblue colors"></div>
                      <div className="colors__hospitalGreen colors"></div>
                    </label>
                    <input className="radio radio--blue" id="blue" type="radio" name="palette" value="1" onChange={(e) => this.props.changeStateProperty(e, 'palette')} defaultChecked={this.props.palette == 1} />
                  </div>
                  <div className="dropdown__colorsgroups radiosGroup">
                    <label className="colors-container" htmlFor="red">
                      <div className="colors__darkRed colors"></div>
                      <div className="colors__strongRed colors"></div>
                      <div className="colors__brightRed colors"></div>
                    </label>
                    <input className="radio radio--red" id="red" type="radio" name="palette" value="2" onChange={(e) => this.props.changeStateProperty(e, 'palette')} defaultChecked={this.props.palette == 2} />
                  </div>
                  <div className="dropdown__colorsgroups radiosGroup">
                    <label className="colors-container" htmlFor="grey">
                      <div className="colors__darkBlue colors"></div>
                      <div className="colors__lightBlue colors"></div>
                      <div className="colors__brightBlue colors"></div>
                    </label>
                    <input className="radio radio--grey" id="grey" type="radio" name="palette" value="3" onChange={(e) => this.props.changeStateProperty(e, 'palette')} defaultChecked={this.props.palette == 3} />
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown__fonts">
              <div className="dropdown__title">
                <h3>Fuentes</h3>
              </div>
              <div className="">
                <div className="dropdown__fonts--selectors" action="index.html" method="post">
                  <div className="dropdown__fontsgroups radiosGroup">
                    <label className="fonts ubuntu" htmlFor="ubuntu">Ubuntu</label>
                    <input className="radio radio--ubuntu" id="ubuntu" type="radio" name="typography" value="1" onChange={(e) => this.props.changeStateProperty(e, 'tipography')} defaultChecked={this.props.tipography == 1}/>
                  </div>
                  <div className="dropdown__fontsgroups radiosGroup">
                    <label className="fonts comic" htmlFor="comic">Comic Sans</label>
                    <input className="radio radio--comic" id="comic" type="radio" name="typography" value="2" onChange={(e) => this.props.changeStateProperty(e, 'tipography')} defaultChecked={this.props.tipography == 2}/>
                  </div>
                  <div className="dropdown__fontsgroups radiosGroup">
                    <label className="fonts montserrat" htmlFor="monstserrat">Montserrat</label>
                    <input className="radio radio--montserrat" id="montserrat" type="radio" name="typography" value="3" onChange={(e) => this.props.changeStateProperty(e, 'tipography')} defaultChecked={this.props.tipography == 3}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
      </section>
      );
  }
}

export default Design;
